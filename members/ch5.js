/* Chapter 5: Goblins, dwarves and the desert (Another Cook's Quest → Fairytale II, first part). */
addQuests({
ACQ:["Recipe for Disaster: Another Cook's Quest",1,"Recipe_for_Disaster/Another_Cook%27s_Quest"],
GD:["Goblin Diplomacy",5,"Goblin_Diplomacy"],
LT:["The Lost Tribe",1,"The_Lost_Tribe"],
DTTD:["Death to the Dorgeshuun",1,"Death_to_the_Dorgeshuun"],
RFDG:["RFD: Freeing the Goblin Generals",1,"Recipe_for_Disaster/Freeing_the_Goblin_generals"],
KS:["The Knight's Sword",1,"The_Knight%27s_Sword"],
FEUD:["The Feud",1,"The_Feud"],
CC:["The Corsair Curse",2,"The_Corsair_Curse"],
ILH:["Icthlarin's Little Helper",2,"Icthlarin%27s_Little_Helper"],
SOTS:["Shadow of the Storm",1,"Shadow_of_the_Storm"],
SS:["Sea Slug",1,"Sea_Slug"],
FC:["Fishing Contest",1,"Fishing_Contest"],
RFDD:["RFD: Freeing the Mountain Dwarf",1,"Recipe_for_Disaster/Freeing_the_Mountain_Dwarf"],
RTLP:["The Ribbiting Tale of a Lily Pad Labour Dispute",1,"The_Ribbiting_Tale_of_a_Lily_Pad_Labour_Dispute"],
LC:["Lost City",3,"Lost_City"],
FT1:["Fairytale I - Growing Pains",2,"Fairytale_I_-_Growing_Pains"],
FT2:["Fairytale II - Cure a Queen",2,"Fairytale_II_-_Cure_a_Queen"]
});

chapter(5,"Goblins, dwarves and the desert",[
{name:"Lumbridge: Recipe for Disaster begins",loc:"Lumbridge castle and the caves under it",
 inv:{have:"Fruit blast, rotten tomato, orange and blue dye, food",bank:""},
 steps:[
["ACQ","Recipe for Disaster: talk to the <b>Cook</b> in Lumbridge castle. Another Cook's Quest: bring him what he asks for (the <b>fruit blast</b> and <b>rotten tomato</b> you saved are part of it)",{req:{cooking:10}}],
["GD","Goblin Diplomacy, Goblin Village north of Falador: take 3 goblin mail from the crates. Dye one <b>orange</b>, one <b>blue</b>, keep one plain",{det:["Crates: behind the generals' hut, in the western hut, and up the ladder near the gate."]}],
["GD","Give the generals orange, then blue, then plain. Quest done",{}],
["LT","The Lost Tribe: talk to <b>Sigmund</b> in Lumbridge castle about the cellar hole, ask around the castle, and follow the clues into the caves",{req:{agility:13,thieving:13,mining:17},sub:["Kill cave goblins for <b>cave goblin skulls</b> (Rag and Bone Man II)","Keep the <b>ring of life</b> reward for The Curse of Arrav"]}],
["DTTD","Death to the Dorgeshuun: talk to <b>Mistag</b> and follow Zanik",{req:{agility:23,thieving:23},sub:["Kill a cave bug on the way (easy Lumbridge Diary)"]}],
["","Dorgesh-Kaan: buy an empty <b>bullseye lantern</b> at Miltog's Lamps. Fill the lamp still with swamp tar and fill the lantern. Add a <b>sapphire</b> for a <b>sapphire lantern</b> (Tears of Guthix)",{}],
["RFDG","Freeing the Goblin Generals: give the generals the slop they want (blue-dyed orange slices among it), then talk to the Cook. Done",{}],
["","Culinaromancer's Chest (Lumbridge castle cellar), hop worlds to restock: <b>7 milk, 7 flour, 3 eggs, 3 cake tins</b>, grapes, 1 pot of cream, spice",{}],
["KS","Make <b>3 redberry pies</b> in the cellar range: flour + water → pastry dough → pie shell → redberries → bake",{sub:["Knight's Sword, The Giant Dwarf and Prying Times"]}]
]},
{name:"Asgarnia and Draynor: The Knight's Sword and Prince Ali",loc:"Falador, Port Sarim, Draynor, Al Kharid",
 inv:{have:"Redberry pie, 2 iron bars, pickaxe, coins, the Prince Ali items",bank:""},
 steps:[
["KS","Talk to the <b>Squire</b> in the White Knights' Castle courtyard, then <b>Reldo</b> in Varrock palace library",{}],
["KS","Give <b>Thurgo</b> (south of Port Sarim) the redberry pie. Take the <b>portrait</b> from Sir Vyvin's cupboard while he's not looking",{}],
["KS","Show Thurgo the portrait, mine <b>blurite</b> in the Asgarnian Ice Dungeon (one extra for the Falador Diary), give him the blurite and <b>2 iron bars</b>. Bring the sword to the Squire. Quest done",{fight:"Ice warriors and ice giants: run",req:{mining:10}}],
["","Mine <b>16 iron ore</b> in Rimmington and smelt it in Falador: you can smith iron now",{}],
["PA","Prince Ali Rescue: <b>Ned</b> in Draynor makes a <b>wig</b> from 3 balls of wool; dye it yellow. Make <b>skin paste</b> at Aggie's. Buy a <b>pink skirt</b> in Varrock and <b>3 beers</b>",{}],
["PA","Make the <b>bronze key</b>: soft clay to Lady Keli for the key print, then the print and a bronze bar to Osman",{}],
["PA","Talk to <b>Leela</b>, give Joe the beers, tie up Lady Keli with a rope and free <b>Ali</b>. Back to Hassan. Quest done",{sub:["Ask Osman how you can help: unlocks the Sorceress's Garden teleport"]}]
]},
{name:"The desert and the coast",loc:"Pollnivneach, Port Sarim, Sophanem, Witchaven",
 inv:{have:"Coins, food, combat gear",bank:""},
 steps:[
["FEUD","The Feud: talk to <b>Ali Morrisane</b> in Al Kharid market and follow the quest in Pollnivneach",{req:{thieving:30},sub:["Collect <b>4 buckets of ugthanki dung</b> in Pollnivneach (My Arm's Big Adventure, Forgettable Tale)"]}],
["CC","The Corsair Curse: <b>Captain Tock</b> north of Port Sarim, then the Corsair Cove",{fight:"Ithoi the Navigator (35)"}],
["","Train <b>Woodcutting</b> 13 → 30 and <b>Firemaking</b> 17 → 30",{}],
["ILH","Icthlarin's Little Helper: talk to the <b>Wanderer</b> west of Sophanem. Bring your cat, the bag of salt, a willow log, tinderbox and a bucket of sap",{sub:["Collect a second willow log (Enakhra's Lament) and a second bucket of sap (The Eyes of Glouphrie)","Save an agility potion if the priest drops one (Tai Bwo Wannai Trio)"]}],
["SOTS","Shadow of the Storm: start in Uzer. Wear the black wizard hat and priest gown set for the black clothing",{req:{crafting:30},fight:"Agrith-Naar: hit it with melee to stop its attacks",sub:["Experience reward on Ranged"]}],
["SS","Sea Slug: talk to <b>Caroline</b> in Witchaven. Buy a small fishing net there",{req:{firemaking:30},sub:["Fish on the platform for a medium Ardougne Diary task"]}]
]},
{name:"White Wolf Mountain, Varlamore and Lost City",loc:"Hemenster, Falador, Varlamore, Lumbridge Swamp, Entrana",
 inv:{have:"Red vine worms, garlic, fishing rod, coins",bank:""},
 steps:[
["FC","Fishing Contest: talk to <b>Austri</b> or <b>Vestri</b> at White Wolf Mountain, then enter the contest at Hemenster",{req:{fishing:10},det:["Put garlic in the pipe by the best spot so the sleeping fisherman moves, then fish with the red vine worms."]}],
["RFDD","Freeing the Mountain Dwarf: the dwarf in the Lumbridge dining room, then <b>Kaylee</b> in the Rising Sun Inn. Buy a <b>wizard's mind bomb</b> from her (Dragon Slayer I)",{req:{cooking:20}}],
["RTLP","The Ribbiting Tale of a Lily Pad Labour Dispute, in Varlamore",{req:{woodcutting:15}}],
["","Train <b>Woodcutting</b> to 36",{}],
["LC","Lost City: talk to the warriors in the camp in Lumbridge Swamp. Chop the tree where <b>Shamus</b> hides",{}],
["LC","On Entrana (no weapons or armour), go into the dungeon. Get a <b>bronze axe</b> from a zombie, then cut the <b>dramen tree</b> and kill the <b>tree spirit</b>",{fight:"Tree spirit (101)",req:{crafting:31,woodcutting:36,combat:45},warn:true}],
["LC","Cut <b>3 dramen branches</b>; don't make staffs from all of them. Enter Zanaris with a dramen staff from Shamus's shed in the swamp. Quest done",{sub:["Branch 2: Freeing Sir Amik Varze. Branch 3: makes a Fremennik Trials step easier"]}],
["FT1","Fairytale I: talk to <b>Martin the Master Gardener</b> in Draynor, then the Fairy Godfather in Zanaris. Defeat the <b>tanglefoot</b> with magic secateurs",{fight:"Tanglefoot (111)",req:{combat:45},warn:true}],
["FT2","Fairytale II: start it and continue <b>until the fairy rings work</b>. Stop there; the rest is much later",{}]
]}
],"Chapter 5 starts with Recipe for Disaster in Lumbridge. Recipe for Disaster has many subquests; each one is its own tag.");
