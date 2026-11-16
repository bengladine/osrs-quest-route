/* Chapter 7: The Myreque, trolls and the Fremennik (Horror from the Deep → Getting Ahead). */
addQuests({
GOD:["The Garden of Death",1,"The_Garden_of_Death"],
EJ:["Enlightened Journey",1,"Enlightened_Journey"],
GOT:["Garden of Tranquillity",2,"Garden_of_Tranquillity"],
ISOM:["In Search of the Myreque",2,"In_Search_of_the_Myreque"],
IAOM:["In Aid of the Myreque",2,"In_Aid_of_the_Myreque"],
DOH:["Darkness of Hallowvale",2,"Darkness_of_Hallowvale"],
TOTC:["A Tail of Two Cats",2,"A_Tail_of_Two_Cats"],
TOL:["Tower of Life",2,"Tower_of_Life"],
TBWT:["Tai Bwo Wannai Trio",2,"Tai_Bwo_Wannai_Trio"],
TS:["Troll Stronghold",1,"Troll_Stronghold"],
ER:["Eadgar's Ruse",1,"Eadgar%27s_Ruse"],
MABA:["My Arm's Big Adventure",1,"My_Arm%27s_Big_Adventure"],
FTR:["The Fremennik Trials",3,"The_Fremennik_Trials"],
SHILO:["Shilo Village",2,"Shilo_Village"],
TR:["Troll Romance",2,"Troll_Romance"],
EOG:["The Eyes of Glouphrie",2,"The_Eyes_of_Glouphrie"],
EW1:["Elemental Workshop I",1,"Elemental_Workshop_I"],
EW2:["Elemental Workshop II",1,"Elemental_Workshop_II"],
PRY:["Prying Times",1,"Prying_Times"],
SG:["Sleeping Giants",1,"Sleeping_Giants"],
RFDP:["RFD: Freeing Pirate Pete",1,"Recipe_for_Disaster/Freeing_Pirate_Pete"],
SOAF:["A Shell of a Friend",1,"A_Shell_of_a_Friend"],
TFI:["The Fremennik Isles",1,"The_Fremennik_Isles"],
GA2:["Getting Ahead",1,"Getting_Ahead"]
});

chapter(7,"The Myreque, trolls and the Fremennik",[
{name:"Lighthouse, Kebos and Entrana",loc:"Lighthouse, Kebos Lowlands, Entrana",
 inv:{have:"Food, combat gear, prayer potions if you have them",bank:""},
 steps:[
["HFTD","Finish Horror from the Deep at the Lighthouse: fix the lighting, then fight the <b>Dagannoth Mother</b> (each colour needs a different attack style)",{fight:"Dagannoth Mother (100)",req:{agility:35,combat:50},warn:true,sub:["Kill dagannoths in the dungeon for <b>dagannoth ribs</b>. You can now buy god books"]}],
["GOD","The Garden of Death, in the Kebos Lowlands",{req:{farming:20}}],
["EJ","Enlightened Journey: <b>Auguste</b> on Entrana. Build the balloon (sandbags, silk, willow branches, ...)",{req:{firemaking:20,farming:30,crafting:36},sub:["Unlocks the balloon transport system","Bring 10 oak logs for a flight later"]}],
["GOT","Garden of Tranquillity: <b>Ellamaria</b> in Varrock palace garden. Grind the essence into dust first to save space",{req:{farming:25},sub:["Pick a <b>white tree fruit</b> afterwards (medium Varrock Diary)"]}]
]},
{name:"The Myreque",loc:"Canifis, Mort Myre, Burgh de Rott, Meiyerditch",
 inv:{have:"Steel warhammer, mithril bar, food, combat gear",bank:""},
 steps:[
["RB2","Near Canifis: a <b>werewolf bone</b> (werewolves in Canifis) and a <b>ghoul bone</b> (ghouls west of Canifis)",{}],
["ISOM","In Search of the Myreque: <b>Vanstrom Klause</b> in the Canifis pub. Fix the bridge in Mort Myre and find the Myreque hideout",{req:{agility:25},fight:"Several vampyre juveniles in a row",sub:["Lots of Attack, Defence, Strength, Hitpoints and Crafting XP"]}],
["IAOM","In Aid of the Myreque: rebuild Burgh de Rott, make the Rod of Ivandis and kill the <b>Gadderanks</b> and juvinates",{req:{attack:25,crafting:25,mining:15,magic:7},sub:["Needs a <b>mithril bar</b>: chaos dwarves in Taverley Dungeon drop them"]}],
["DOH","Darkness of Hallowvale: sneak through Meiyerditch. Put all three XP rewards in <b>Herblore</b>",{req:{construction:5,mining:20,thieving:22,agility:26,crafting:32,magic:33,strength:40}}]
]},
{name:"Cats and towers",loc:"Ardougne, Burthorpe, the desert",
 inv:{have:"Chocolate cake, your cat, food",bank:""},
 steps:[
["TOTC","A Tail of Two Cats: <b>Unferth</b> in Burthorpe. Bring a chocolate cake (from Gertrude's Cat, or bake one). Lamp on Herblore",{}],
["TOL","Tower of Life: the builders at the tower south of Ardougne",{req:{construction:10}}],
["","Finish the <b>Easy Falador Diary</b>; lamp on Herblore",{}]
]},
{name:"Karamja and the trolls",loc:"Tai Bwo Wannai, Brimhaven, Death Plateau",
 inv:{have:"Agility potion, iron spear, jogre bones, food, combat gear",bank:""},
 steps:[
["TBWT","Tai Bwo Wannai Trio: <b>Timfraku</b> in Tai Bwo Wannai, then his three sons",{req:{agility:15,cooking:30,fishing:5},sub:["Talk to the brothers again afterwards to collect all the XP","Get 100% favour in the Tai Bwo Wannai Cleanup (medium Karamja Diary and My Arm's Big Adventure)"]}],
["RB2","Brimhaven Dungeon: kill a moss giant and a fire giant for their bones",{}],
["TS","Troll Stronghold: <b>Dunstan</b> in Burthorpe. Beat <b>Dad</b> and free Godric from the stronghold prison",{fight:"Dad (101)",req:{agility:15,combat:55},warn:true,sub:["Kill a mountain troll for a <b>troll bone</b>","Unlocks crafting law runes"]}],
["ER","Eadgar's Ruse: <b>Eadgar</b> on top of Trollheim. Trick the trolls with a fake goutweed",{req:{herblore:31},sub:["Take <b>2 extra goutweed</b> from the storeroom (Dream Mentor, Dragon Slayer II)"]}],
["MABA","My Arm's Big Adventure: <b>Burntmeat</b> in the stronghold kitchen",{req:{woodcutting:10,farming:29}}]
]},
{name:"Rellekka, Shilo and the trolls again",loc:"Rellekka, Shilo Village, Troll Country",
 inv:{have:"Raw shark, dramen branch, food, combat gear",bank:""},
 steps:[
["FTR","The Fremennik Trials: <b>Brundt</b> in Rellekka. Pass the seven trials (Manni, Sigmund, Olaf, Peer, Swensen, Thorvald, Sigli)",{sub:["No skill requirements; recommended: Crafting 40, Fletching 25, Woodcutting 40 (or bring the items)","Unlocks Rellekka's shops, the fremennik helmets and the Lunar route later"]}],
["SHILO","Shilo Village: <b>Mosol Rei</b> at the Tai Bwo Wannai gate. Find Rashiliyia's remains and the Beads of the Dead",{req:{crafting:20,agility:32},fight:"Nazastarool (zombie, skeleton, ghost)",sub:["Sell spare quest items to Yanni Salika, and the black prism for 5,000"]}],
["","Train <b>Woodcutting</b> to 45",{}],
["TR","Troll Romance: <b>Ug</b> in Trollweiss. Safespot <b>Arrg</b> at the west entrance of the arena",{req:{agility:28},fight:"Arrg (113)",warn:true}],
["","Train <b>Magic</b> to 46",{}],
["EOG","The Eyes of Glouphrie: <b>Brimstail</b> under the Gnome Stronghold. Needs a <b>mud rune</b>",{req:{construction:5,magic:46},sub:["Kill a terrorbird for another <b>terrorbird wing</b> if you need it"]}]
]},
{name:"Workshops, Sailing and a Shell of a Friend",loc:"Seers' Village, Pandemonium, Lumbridge",
 inv:{have:"12 coal, hammer, needle and thread, food",bank:""},
 steps:[
["EW1","Elemental Workshop I: the bookcase in the Seers' Village house with the workshop. Kill one level-35 elemental of each type (Kandarin Diary)",{req:{mining:20,smithing:20,crafting:20},sub:["Mine 2 extra elemental ore for part II"]}],
["EW2","Elemental Workshop II: read the scroll from the workshop bookcase",{req:{magic:20,smithing:30}}],
["","Train <b>Sailing</b> to 12",{}],
["PRY","Prying Times",{sub:["A newer Sailing quest: follow the wiki quick guide through the tag link"]}],
["SG","Sleeping Giants: unlocks the Giants' Foundry",{req:{smithing:15}}],
["RFDP","Freeing Pirate Pete: underwater with a fishbowl helmet and the 3 raw cod and bronze wire",{req:{cooking:31}}],
["SOAF","A Shell of a Friend",{sub:["A newer quest: follow the wiki quick guide through the tag link"]}],
["","Train <b>Woodcutting</b> to 56 and <b>Crafting</b> to 46",{}]
]},
{name:"The Fremennik Isles and Getting Ahead",loc:"Neitiznot, Jatizso, Kebos",
 inv:{have:"Food, combat gear, coins",bank:""},
 steps:[
["TFI","The Fremennik Isles: <b>Mord Gunnars</b> in Rellekka. Ends with the <b>Ice Troll King</b>. Both XP rewards on Strength",{fight:"Ice Troll King (122)",warn:true,sub:["Start birdhouse runs on Fossil Island from here"]}],
["GA2","Getting Ahead: <b>Gordon</b> in the Kebos Lowlands farm",{req:{crafting:30,construction:26}}]
]}
],"From chapter 7 on, every quest has a short entry. The quest tag opens the wiki guide with the full walkthrough.");
