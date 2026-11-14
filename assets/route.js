const W="https://oldschool.runescape.wiki/w/";
const KEY=window.ROUTE_KEY||"route";
const AKEY="osrsroute-account";
let S={ticks:{},done:{},status:{LTR:"done"},stats:{}};
let pageRaw=null,acctRaw=null;
try{pageRaw=JSON.parse(localStorage.getItem(KEY)||"null");acctRaw=JSON.parse(localStorage.getItem(AKEY)||"null")}catch(e){}
if(pageRaw)S=Object.assign(S,pageRaw);
if(acctRaw){S.status=acctRaw.status||S.status;S.stats=acctRaw.stats||{};if(acctRaw.rsn)S.rsn=acctRaw.rsn}
if(!S.status)S.status={};
if(S.done){for(const k in S.done)if(S.done[k]&&!S.status[k])S.status[k]="done";S.done={}}
const stOf=k=>S.status[k]||"doing";
function save(){try{localStorage.setItem(KEY,JSON.stringify({ticks:S.ticks}));localStorage.setItem(AKEY,JSON.stringify({status:S.status,stats:S.stats,rsn:S.rsn}))}catch(e){}}
save();
const qlist=q=>q===""?[]:(Array.isArray(q)?q:[q]);
const SKILLS=[["combat","Combat"],["mining","Mining"],["smithing","Smithing"],["cooking","Cooking"],["crafting","Crafting"],["magic","Magic"]];
const isDoneStep=(text)=>/Quest done|quest is done/.test(text);

/* quest points: quests marked done, plus quests whose "Quest done" step is ticked */
function questComplete(k){
  if(stOf(k)==="done")return true;
  if(stOf(k)==="skip")return false;
  let found=false;
  rows.forEach(r=>{if(r.qs.length===1&&r.qs[0]===k&&r.finish&&S.ticks[r.cb.id])found=true});
  return found;
}
const qp=()=>Object.keys(QUESTS).reduce((n,k)=>n+(questComplete(k)?QUESTS[k][1]:0),0);

function tagEl(k){
  const a=document.createElement("a");a.className="tag";a.textContent=k;const i=Object.keys(QUESTS).indexOf(k);a.style.color=`hsl(${(i*137)%360} 60% var(--tag-l))`;
  a.href=W+QUESTS[k][2];a.target="_blank";a.rel="noopener";a.title=QUESTS[k][0]+" on the OSRS Wiki";return a;
}

/* quest panel */
const qp_el=document.getElementById("qlist");const qsel={};
Object.entries(QUESTS).forEach(([k,[name,pts]])=>{
  const id="q-"+k;const lab=document.createElement("label");lab.className="qitem";lab.htmlFor=id;
  const sp=document.createElement("span");sp.textContent=name;
  const pt=document.createElement("small");pt.textContent=pts+" QP";
  const sel=document.createElement("select");sel.id=id;
  [["doing","Doing"],["done","Done"],["skip","Skip"]].forEach(([v,t])=>{const o=document.createElement("option");o.value=v;o.textContent=t;sel.appendChild(o)});
  sel.value=stOf(k);
  sel.addEventListener("change",()=>{if(sel.value==="doing")delete S.status[k];else S.status[k]=sel.value;save();refresh()});
  lab.append(sp,pt,sel);qp_el.appendChild(lab);qsel[k]=sel;
});

/* stats inputs */
const st=document.getElementById("stats");
SKILLS.forEach(([k,label])=>{
  const id="st-"+k;const w=document.createElement("label");w.className="stat";w.htmlFor=id;
  const t=document.createElement("span");t.textContent=label;
  const inp=document.createElement("input");inp.type="number";inp.min=1;inp.max=k==="combat"?126:99;inp.id=id;inp.inputMode="numeric";inp.placeholder="–";
  if(S.stats[k])inp.value=S.stats[k];
  inp.addEventListener("input",()=>{const v=parseInt(inp.value,10);if(v>0)S.stats[k]=v;else delete S.stats[k];save();refresh()});
  w.append(t,inp);st.appendChild(w);
});

/* requirement badges */
function reqBadges(req,fight){
  const out=[];
  if(fight)out.push({cls:"fight",text:"Fight: "+fight});
  if(!req)return out;
  Object.entries(req).forEach(([k,v])=>{
    let have,label;
    if(k==="qp"){have=qp();label=v+" quest points";}
    else{have=S.stats[k];label=(k==="combat"?"Combat ":SKILLS.find(s=>s[0]===k)[1]+" ")+v+(k==="combat"?"+ recommended":"");}
    const cls=have==null?"req":(have>=v?"req ok":"req low");
    out.push({cls,text:label+(have!=null&&have<v?` (you: ${have})`:"")});
  });
  return out;
}

/* render steps */
const root=document.getElementById("phases");const rows=[];const sections=[];
PHASES.forEach((p,pi)=>{
  const s=document.createElement("section");
  s.innerHTML=`<div class="phase-head"><span class="n">${pi+1}</span><h2>${p.name}</h2><span class="loc">${p.loc||""}</span></div>`;
  if(p.inv&&p.inv.have){const iv=document.createElement("details");iv.className="inv";const sm=document.createElement("summary");sm.textContent="Inventory check";const a=document.createElement("p");a.innerHTML="<b>Have with you:</b> "+p.inv.have;iv.append(sm,a);if(p.inv.bank){const b=document.createElement("p");b.innerHTML="<b>Can go to the bank:</b> "+p.inv.bank;iv.appendChild(b)}s.appendChild(iv)}
  const ul=document.createElement("ul");ul.className="steps";
  let pos=0;
  p.steps.forEach(([q,text,o])=>{
    o=o||{};const id=o.id||`s${pi}-${pos++}`;const qs=qlist(q);
    const li=document.createElement("li");if(o.warn)li.classList.add("warn");
    const cb=document.createElement("input");cb.type="checkbox";cb.id=id;cb.checked=!!S.ticks[id];
    const tg=document.createElement("div");tg.className="tags";if(qs.length)qs.forEach(k=>tg.appendChild(tagEl(k)));else{const n=document.createElement("span");n.className="tag none";n.textContent="—";tg.appendChild(n)}
    const lab=document.createElement("label");lab.htmlFor=id;lab.innerHTML=Array.isArray(text)?text[0]:text;
    if(o.sub){const u=document.createElement("ul");o.sub.forEach(x=>{const l=document.createElement("li");l.textContent=x;u.appendChild(l)});lab.appendChild(u)}
    li.append(cb,tg,lab);
    const bw=document.createElement("div");bw.className="badges";li.appendChild(bw);
    if(o.det){const d=document.createElement("details");d.className="more";const sm=document.createElement("summary");sm.textContent="Detailed steps";const ol=document.createElement("ol");o.det.forEach(x=>{const l=document.createElement("li");l.textContent=x;ol.appendChild(l)});d.append(sm,ol);li.appendChild(d)}
    if(o.loc){const a=document.createElement("a");a.className="wlink";a.href=W+o.loc;a.target="_blank";a.rel="noopener";a.textContent="Location and pictures on the wiki ↗";li.appendChild(a)}
    cb.addEventListener("change",()=>{S.ticks[id]=cb.checked;save();refresh()});
    ul.appendChild(li);rows.push({li,cb,qs,o,bw,finish:isDoneStep(Array.isArray(text)?text[0]:text)});
  });
  s.appendChild(ul);const em=document.createElement("p");em.className="emptynote";em.textContent="Nothing left to do here.";em.hidden=true;s.appendChild(em);root.appendChild(s);sections.push({s,ul,em});
});

const dsb=document.getElementById("dsskip");if(dsb)dsb.onclick=()=>{S.status.DRG="skip";save();refresh()};

function paintBadges(bw,req,fight){bw.innerHTML="";reqBadges(req,fight).forEach(b=>{const s=document.createElement("span");s.className="badge "+b.cls;s.textContent=b.text;bw.appendChild(s)});bw.hidden=!bw.children.length}

function refresh(){
  let total=0,ticked=0;
  rows.forEach(r=>{
    const active=r.qs.length===0||r.qs.some(k=>stOf(k)==="doing");
    const gone=!active&&r.qs.every(k=>stOf(k)==="skip");
    const skip=!active;
    r.li.hidden=gone;
    r.li.classList.toggle("skip",skip&&!gone);r.li.classList.toggle("done",r.cb.checked);
    r.cb.disabled=skip;
    if(!skip){total++;if(r.cb.checked)ticked++}
    paintBadges(r.bw,r.o.req,r.o.fight);
    r.li.classList.toggle("notready",!skip&&!!r.bw.querySelector(".low"));
  });
  sections.forEach(x=>{const lis=[...x.ul.children];const left=lis.some(li=>!li.hidden&&!li.classList.contains("skip"));x.ul.hidden=!left;x.em.hidden=left;const iv=x.s.querySelector(".inv");if(iv)iv.hidden=!left});
  Object.entries(qsel).forEach(([k,sel])=>{sel.value=stOf(k)});
  const c=S.stats.combat,dw=document.getElementById("dswarn");
  if(dw){dw.hidden=!(stOf("DRG")==="doing"&&c&&c<40);if(!dw.hidden)document.getElementById("dsc").textContent=c}
  document.getElementById("count").textContent=`${ticked} / ${total}`;
  document.getElementById("fill").style.width=(total?ticked/total*100:0)+"%";
  document.getElementById("qp").textContent=qp();
  document.getElementById("qdone").textContent=Object.keys(QUESTS).filter(questComplete).length;
}
document.getElementById("qptotal").textContent=Object.values(QUESTS).reduce((n,q)=>n+q[1],0);
document.getElementById("qtotal").textContent=Object.keys(QUESTS).length;
refresh();

const cf=document.getElementById("confirm");
document.getElementById("reset").onclick=()=>{cf.hidden=false};
document.getElementById("no").onclick=()=>{cf.hidden=true};
document.getElementById("yes").onclick=()=>{S.ticks={};save();rows.forEach(r=>r.cb.checked=false);refresh();cf.hidden=true};


/* account lookup: WikiSync (quests + levels), Wise Old Man (levels) as fallback */
const norm=t=>String(t).toLowerCase().replace(/[’`]/g,"'").replace(/&/g,"and").replace(/^the /,"").replace(/[^a-z0-9]/g,"");
const QBYNAME={};Object.entries(QUESTS).forEach(([k,[n]])=>QBYNAME[norm(n)]=k);
function combatLevel(L){const g=k=>L[k]||1;const base=0.25*(g("defence")+(L.hitpoints||10)+Math.floor(g("prayer")/2));
  return Math.floor(base+Math.max(0.325*(g("attack")+g("strength")),0.325*Math.floor(g("ranged")*1.5),0.325*Math.floor(g("magic")*1.5)))}
function applyLevels(L){
  ["mining","smithing","cooking","crafting","magic"].forEach(k=>{if(L[k]){S.stats[k]=L[k];const i=document.getElementById("st-"+k);if(i)i.value=L[k]}});
  const c=combatLevel(L);S.stats.combat=c;const ci=document.getElementById("st-combat");if(ci)ci.value=c;
}
const lmsg=document.getElementById("lookupmsg");
function say(t,cls){lmsg.textContent=t;lmsg.className="hint"+(cls?" "+cls:"")}
if(S.rsn)document.getElementById("rsn").value=S.rsn;
document.getElementById("lookup").addEventListener("submit",async e=>{
  e.preventDefault();
  const name=document.getElementById("rsn").value.trim();
  if(!name){say("Type your in-game name first.","err");return}
  S.rsn=name;save();
  const btn=document.getElementById("loadbtn");btn.disabled=true;say("Looking up "+name+"…");
  let gotQuests=false,gotLevels=false;
  try{
    const r=await fetch("https://sync.runescape.wiki/runelite/player/"+encodeURIComponent(name)+"/STANDARD");
    if(r.ok){const d=await r.json();
      if(d.quests){let n=0;Object.entries(d.quests).forEach(([qn,v])=>{const k=QBYNAME[norm(qn)];if(k&&v===2&&stOf(k)!=="done"){S.status[k]="done";n++}});gotQuests=true;
        if(d.levels){const L={};Object.entries(d.levels).forEach(([k,v])=>L[k.toLowerCase()]=v);applyLevels(L);gotLevels=true}
        save();refresh();say("Loaded from WikiSync: "+n+" more quest"+(n===1?"":"s")+" marked done"+(gotLevels?", levels filled in":"")+".","ok")}
    }
  }catch(err){}
  if(!gotLevels){
    try{
      const r=await fetch("https://api.wiseoldman.net/v2/players/"+encodeURIComponent(name));
      if(r.ok){const d=await r.json();const sk=d&&d.latestSnapshot&&d.latestSnapshot.data&&d.latestSnapshot.data.skills;
        if(sk){const L={};Object.entries(sk).forEach(([k,v])=>{if(v&&v.level>0)L[k]=v.level});applyLevels(L);gotLevels=true;save();refresh()}}
    }catch(err){}
  }
  btn.disabled=false;
  if(gotQuests)return;
  if(gotLevels)say("Levels loaded from Wise Old Man. Your quests couldn't be loaded: install the WikiSync plugin in RuneLite, log in once, then try again. Or set your quests by hand below.","ok");
  else say("Couldn't find "+name+". Check the spelling, or look yourself up once on wiseoldman.net so it starts tracking you, then try again. You can also fill in your levels by hand.","err");
});
