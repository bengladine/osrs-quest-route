/* Chapter 4: Great Kourend, the Gnomes, the Digsite and Varlamore (The Queen of Thieves → Death on the Isle). */
addQuests({
QOT:["The Queen of Thieves",1,"The_Queen_of_Thieves"],
FT:["The Forsaken Tower",1,"The_Forsaken_Tower"],
DOD:["The Depths of Despair",1,"The_Depths_of_Despair"],
TOTR:["Tale of the Righteous",1,"Tale_of_the_Righteous"],
AOA:["The Ascent of Arceuus",1,"The_Ascent_of_Arceuus"],
WOTW:["The Writing's on the Wall",1,"The_Writing%27s_on_the_Wall"],
GT:["The Grand Tree",5,"The_Grand_Tree"],
MD:["Mountain Daughter",2,"Mountain_Daughter"],
HFTD:["Horror from the Deep",2,"Horror_from_the_Deep"],
MH:["Making History",3,"Making_History"],
TGD:["The Giant Dwarf",2,"The_Giant_Dwarf"],
SOA:["Shield of Arrav",1,"Shield_of_Arrav"],
DIG:["The Dig Site",2,"The_Dig_Site"],
GOL:["The Golem",1,"The_Golem"],
PA:["Prince Ali Rescue",3,"Prince_Ali_Rescue"],
EAA:["Ethically Acquired Antiquities",1,"Ethically_Acquired_Antiquities"],
TP:["Twilight's Promise",1,"Twilight%27s_Promise"],
DOTI:["Death on the Isle",2,"Death_on_the_Isle"]
});

chapter(4,"Great Kourend, the gnomes and the desert",[
{name:"Great Kourend",loc:"Port Piscarilius, Hosidius, Lovakengj, Shayzien, Arceuus",
 inv:{have:"A stew, spade, pickaxe, coins, food, combat gear",bank:""},
 steps:[
["QOT","The Queen of Thieves: start with <b>Tomas Lawry</b> in Port Piscarilius and follow the quest through the Warrens. Bring a <b>stew</b> (Gertrude's Cat reward, or 20 coins in the Forester's Arms)",{sub:["Kill seagulls on the southern docks for a <b>seagull wing</b> (Rag and Bone Man II)","Trade with the Warrens General Store shopkeeper: easy Kourend & Kebos Diary"]}],
["QOT","After the Conrad King step: buy <b>3 raw cod</b>, a <b>raw shark</b> and a <b>raw swordfish</b> at Frankie's Fishing Emporium",{sub:["Cod: Freeing Pirate Pete. Shark: The Fremennik Trials. Swordfish: a medium Ardougne Diary task"]}],
["QOT","Finish The Queen of Thieves",{}],
["FT","The Forsaken Tower: start with <b>Vulcana</b> in the Lovakengj assembly and follow the quest at the tower north-west of Lovakengj",{sub:["A newer-style puzzle quest: the wiki quick guide has the puzzle answers"]}],
["","Train <b>Agility</b> to 18 (Shayzien or Draynor rooftop course)",{req:{agility:14}}],
["DOD","The Depths of Despair in Hosidius. Bring a spade: mine some <b>saltpetre</b> on the way and kill a <b>sand crab</b> in the Crab Claw Caves (two easy diary tasks)",{req:{agility:18},sub:["Afterwards steal from the fruit stall to the north: a third diary task"]}],
["TOTR","Tale of the Righteous: start with <b>Phileas Rimor</b> in Shayzien",{req:{mining:10,strength:16}}],
["AOA","The Ascent of Arceuus: start with <b>Mori</b> in Arceuus",{req:{hunter:12}}],
["","Train <b>Agility</b> to 22",{}],
["WOTW","The Writing's on the Wall",{sub:["A newer quest: follow the wiki quick guide through the tag link"]}]
]},
{name:"The Grand Tree",loc:"Gnome Stronghold, Karamja",
 inv:{have:"Food, combat gear (you fight a black demon), coins",bank:""},
 steps:[
["RB2","Kill terrorbirds south-west of the Grand Tree for a <b>terrorbird wing</b>",{}],
["","Grand Tree Groceries: a <b>gnome spice</b> and an <b>orange</b> (Freeing the Goblin Generals). Heckel Funch (east of the pub): <b>3 vodka</b> (2 Bone Voyage, 1 Eadgar's Ruse)",{}],
["GT","Talk to <b>King Narnode Shareen</b> under the Grand Tree. Take the <b>bark sample</b> to <b>Hazelmere</b> on the island north-east of Yanille",{req:{agility:25}}],
["GT","Report to the king, then follow the trail of <b>Glough</b>: his house, the guard, and the <b>Karamja shipyard</b>",{det:["The shipyard gate needs a password; the wiki has the exact conversation."]}],
["RB2","On Karamja, kill <b>jogres</b> west of the shipyard for a <b>jogre bone</b>. Keep extra jogre bones for Tai Bwo Wannai Trio",{}],
["GT","Back at the Grand Tree: put the four twigs in Glough's chest puzzle and find the hidden way under the tree",{}],
["GT","Kill the <b>black demon</b> under the tree, take the <b>daconia rock</b> and give it to the king. Quest done",{fight:"Black demon (172): safespottable with ranged or magic",req:{combat:45},warn:true}],
["MH","Talk to <b>Jorral</b> at the Outpost, south-west of the Gnome Stronghold, to start Making History",{}]
]},
{name:"Fremennik coast and Keldagrim",loc:"Barbarian Outpost → Lighthouse → Rellekka → Keldagrim",
 inv:{have:"2 planks, 60 steel nails, hammer, food",bank:""},
 steps:[
["HFTD","Barbarian Assault teleport, cross the basalt rocks north and talk to <b>Larrissa</b> outside the Lighthouse. Fix the bridge east of it with 2 planks",{req:{agility:35}}],
["MH","In Rellekka: do the Making History part there",{}],
["RB2","East of Rellekka, kill rabbits by the swaying tree for a <b>rabbit bone</b>",{}],
["MD","Mountain Daughter: talk to <b>Hamal</b> at the mountain camp east of Rellekka and follow the quest",{req:{agility:20},fight:"The Kendal (70)"}],
["TGD","Start The Giant Dwarf in the cave north-west of the camp and talk to <b>Commander Veldaban</b> in Keldagrim",{sub:["Unlocks the trapdoor shortcut from the Grand Exchange and the Blast Furnace teleport"]}],
["","Gunslik's Assorted Items in Keldagrim: <b>charcoal</b> (5), a <b>pestle and mortar</b>, <b>4 vials</b>, <b>2 ropes</b> and a <b>chisel</b>",{}],
["","Leave by the dwarven boatman north-east of the river",{}]
]},
{name:"Shield of Arrav and the desert",loc:"Varrock, Al Kharid, Uzer, the Digsite",
 inv:{have:"Bird snare, pickaxe, hammer, chisel, knife, 4 soft clay, coins",bank:""},
 steps:[
["SOA","Shield of Arrav needs a partner for the end. Use the chat channel <b>osrs soa</b> to find one",{det:["Start with Reldo in the Varrock palace library, then pick a gang (Phoenix or Black Arm). The wiki has the full guide for both sides."]}],
["SOA","Finish Shield of Arrav and use the lamp on <b>Herblore</b>",{}],
["","Mine an <b>iron ore</b> in the south-east Varrock mine (easy Varrock Diary)",{}],
["GOL","Al Kharid mine: <b>12 coal</b> (Elemental Workshop) and 1 iron ore (Lumbridge Diary)",{}],
["PA","Start Prince Ali Rescue: <b>Chancellor Hassan</b> in the Al Kharid palace, then <b>Osman</b> outside",{}],
["","Shantay Pass: buy <b>desert clothing</b> and an <b>empty waterskin</b>; wear the clothing through the pass. Cut a <b>Kharidian cactus</b> with the knife (diary tasks)",{}],
["GOL","The Golem: talk to the <b>golem</b> in the Ruins of Uzer and repair it with <b>4 soft clay</b>",{req:{crafting:20,thieving:25}}],
["GOL","Read the letter: you need its translation from the Varrock Museum",{}],
["DIG","The Dig Site: talk to the <b>Examiner</b> at the Digsite exam centre, east of Varrock",{req:{agility:10,herblore:10,thieving:25}}],
["DIG","Pass the three exams; the answers come from the students on the site and the museum displays",{det:["The wiki lists each question, the student who helps you and the item they want (one wants the cup of tea from Biohazard)."]}],
[["DIG","GOL"],"Varrock Museum: get the golem's statuette and the translation notes, and visit the curator",{}],
["DIG","Dig in the private area, find Doug Deeping's notes and make the <b>explosive compound</b> (nitroglycerin, ground charcoal and arcenia root)",{}],
["DIG","Blow open the rocks, take the tablet and give it to the Expert. Quest done",{sub:["Return the level 3 certificate to Curator Haig Halen for a <b>fruit blast</b> (Another Cook's Quest)"]}],
["GOL","Back in the desert: mine <b>5 clay</b> by the desert phoenix while you take its <b>feather</b>, and snare a <b>golden warbler</b> (diary tasks)",{}],
["GOL","In the throne room, chisel <b>2 sapphires, 2 rubies and 2 emeralds</b> from the throne. Open the portal and send the demon back. Quest done",{sub:["Sapphires: Tears of Guthix and Making History"]}]
]},
{name:"Varlamore",loc:"Civitas illa Fortis",
 inv:{have:"Coins, food, combat gear",bank:""},
 steps:[
["","Travel to Varlamore with <b>Regulus Cento</b> at the east entrance of Varrock",{}],
["EAA","Ethically Acquired Antiquities in Civitas illa Fortis",{sub:["Buy an <b>iron spear</b> at the Fortis Blacksmith (Tai Bwo Wannai Trio)"]}],
["TP","Twilight's Promise in Civitas illa Fortis",{}],
["","Take the quetzal to <b>Tal Teklan</b>. At Dyes to Die For: <b>7 blue, 2 orange, 8 yellow, 8 red, 1 green, 2 purple</b> dye, plus a few spare",{sub:["For Freeing the Goblin Generals, Ghosts Ahoy and others"]}],
["","Buy an <b>oak longbow</b> at Arcuani's Archery Supplies (Ghosts Ahoy)",{}],
["","Train <b>Agility</b> to 32",{}],
["DOTI","Death on the Isle, on the island off Civitas",{req:{agility:32,thieving:34},sub:["Claim the <b>costume needle</b> afterwards"]}]
]}
],"Chapter 4 moves fast: these are mostly newer quests. Each one here is a single step or a few; use the tag link for the full wiki guide.");
