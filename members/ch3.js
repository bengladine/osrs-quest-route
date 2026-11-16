/* Chapter 3: Misthalin, Asgarnia and into Morytania (The Ides of Milk → Death Plateau). */
addQuests({
IM:["The Ides of Milk",1,"The_Ides_of_Milk"],
MUD:["Mudfoot's Big Adventure",1,"Mudfoot%27s_Big_Adventure"],
BIM:["Below Ice Mountain",1,"Below_Ice_Mountain"],
BKF:["Black Knights' Fortress",3,"Black_Knights%27_Fortress"],
OBS:["Observatory Quest",2,"Observatory_Quest"],
ARS:["A Ruff Situation",1,"A_Ruff_Situation"],
RJ:["Romeo & Juliet",5,"Romeo_%26_Juliet"],
PIP:["Priest in Peril",1,"Priest_in_Peril"],
RB1:["Rag and Bone Man I",1,"Rag_and_Bone_Man_I"],
NS:["Nature Spirit",2,"Nature_Spirit"],
RD:["Recruitment Drive",1,"Recruitment_Drive"],
SC:["Scorpion Catcher",1,"Scorpion_Catcher"],
JP:["Jungle Potion",1,"Jungle_Potion"],
API:["A Porcine of Interest",1,"A_Porcine_of_Interest"],
RB2:["Rag and Bone Man II",1,"Rag_and_Bone_Man_II"],
DP:["Death Plateau",1,"Death_Plateau"]
});

chapter(3,"Misthalin, Asgarnia and the way into Morytania",[
{name:"Lumbridge: The Ides of Milk and Mudfoot",loc:"Lumbridge cow fields",
 inv:{have:"Food, a weapon, and runes or a bow for Mudfoot's last fight",bank:""},
 steps:[
["IM","Talk to <b>Cassius</b> at the pond south of the windmill",{loc:"Cassius"}],
["IM","Talk to <b>Gillie Groats</b> in the cow field north-east of the castle, then <b>Seth Groats</b> in the farmhouse by the chicken coop; search the shelves for the book",{loc:"Gillie_Groats"}],
["IM","Give Cassius the book, drink the milk sample, and get a second sample. Ask <b>Duke Horacio</b> (upstairs in the castle) for the permit",{}],
["IM","Back to Gillie: drink the sample, go through the gate north-east and fight <b>Brutus</b>. Then Gillie, then Cassius. Quest done",{fight:"Brutus: step sideways when he snorts or growls"}],
["IM","Talk to Gillie Groats again for the extra rewards. Use the lamp on <b>Prayer</b>",{}],
["MUD","Talk to <b>Captain Harlan</b> outside the Lumbridge general store, then <b>Mudfoot</b> across the river",{loc:"Captain_Harlan"}],
["MUD","Deal with the three outlaws: the ranger at the chicken field, the mage south of the H.A.M. hideout, and the warrior in the graveyard (use Magic or Ranged: he prays against melee). Quest done",{fight:"Outlaws (6–8)",sub:["Use all four lamps on <b>Prayer</b>"]}]
]},
{name:"Below Ice Mountain and Black Knights' Fortress",loc:"Falador, Varrock, Barbarian Village, Edgeville",
 inv:{have:"Coins, 3 soft clay, bread, knife, food, the barcrawl card",bank:""},
 steps:[
["BIM","Talk to <b>Willow</b> on the path south of Ice Mountain",{req:{qp:16},loc:"Willow_(Below_Ice_Mountain)"}],
["BKF","In Falador: talk to <b>Sir Amik Varze</b> on the 2nd floor of the White Knights' Castle's west tower",{loc:"Sir_Amik_Varze"}],
[["BIM","BAR"],"Rising Sun Inn: buy a beer for <b>Burntof</b> and beat him at rock-paper-scissors. Have your barcrawl drink there too",{}],
["","Easy Falador Diary: get a haircut at the hairdresser next door, and fill a bucket at the pump outside",{}],
["BIM","Barbarian Village: talk to <b>Checkal</b>, train with <b>Atlas</b> in the Long Hall, then use the <b>Flex</b> emote by Checkal",{}],
["","Barbarian Village: make <b>2 unfired bowls</b> on the potter's wheel. Fire one in the oven (easy Varrock Diary); keep the other unfired for Dragon Slayer I",{}],
["BKF","Buy <b>2 bronze med helms</b> at the helmet shop in Barbarian Village",{sub:["One for Black Knights' Fortress, one for Mourning's End Part II"]}],
["BIM","Take the <b>cooked meat and beer</b> from the Long Hall tables. Talk to <b>Marley</b> at the Edgeville yews",{}],
[["BIM","BAR","PT"],"Blue Moon Inn, Varrock: ask the cook for a <b>steak sandwich</b>. Have the barcrawl drink. Open <b>Hector's chest</b> upstairs with the key from Redbeard Frank",{}],
["BKF","Varrock: pick a <b>cabbage</b> south of the inn and buy an <b>iron chainbody</b> at Horvik's",{}],
["BIM","Give the sandwich to Marley",{}],
["BKF","Black Knights' Fortress: wear the chainbody and med helm, overhear the plot at the grill and drop the cabbage down the hole",{req:{combat:20},fight:"Black Knights"}],
["BIM","Talk to Willow at the Camdozaal entrance on the west side of Ice Mountain and beat the <b>Ancient Guardian</b>. Quest done",{fight:"Ancient Guardian, or mine the 4 corner pillars",req:{mining:10}}],
["BKF","Back to Sir Amik Varze. Quest done. Use both lamps on <b>Prayer</b>",{}]
]},
{name:"Pirate's Treasure, Observatory and Yanille",loc:"Falador Park, then south of Ardougne",
 inv:{have:"Spade, a ranged or magic attack, 3 planks, bronze bar, molten glass, coins",bank:""},
 steps:[
["PT","Falador Park: dig in the middle of the X by the Saradomin statue. Deal with the gardener and dig again. Quest done",{fight:"Gardener (4)",sub:["Kill a duck in the park with Ranged or Magic: easy Falador Diary","Keep the <b>gold ring</b> (Mourning's End Part II) and the <b>emerald</b> (Legends' Quest)"]}],
["OBS","Talk to the <b>Observatory professor</b> at the Observatory south of Ardougne. He needs <b>3 planks</b> and a <b>bronze bar</b> to fix the telescope",{loc:"Observatory_professor"}],
["OBS","In the dungeon under the Observatory: find the key and open the chest with the <b>lens mould</b>. Use the <b>molten glass</b> on the mould to make the lens",{req:{crafting:10},fight:"Goblins and a goblin guard: nothing hard"}],
["OBS","Give the lens to the professor, look through the telescope and name the constellation. Quest done",{sub:["The reward depends on the constellation"]}],
[["BAR"],"Yanille: barcrawl drink at the <b>Dragon Inn</b>. Buy a <b>greenman's ale</b> there",{}],
["","Yanille: take <b>2 rotten tomatoes</b> from Pelters' Veg Stall, buy <b>8 pots</b> at Frenita's Cookery Shop",{sub:["Tomatoes: Another Cook's Quest and Mourning's End Part II. Pots: Rag and Bone Man I"]}],
["NS","Make the <b>silver sickle</b>: a silver bar and the sickle mould at a furnace (Ardougne)",{}]
]},
{name:"Varrock: A Ruff Situation and Romeo & Juliet",loc:"Varrock",
 inv:{have:"Coins",bank:""},
 steps:[
["ARS","Do A Ruff Situation in Varrock",{sub:["A newer quest: follow the wiki quick guide through the tag link","Unlocks raising puppies"]}],
["RJ","<b>Romeo</b> in the square → <b>Juliet</b> on the balcony west of the west bank → back to Romeo",{loc:"Romeo"}],
["RJ","<b>Father Lawrence</b> in the church north-east, then pick <b>cadava berries</b> west of the south-east mine and take them to the <b>Apothecary</b>",{sub:["Pick extra cadava berries (Making Friends with My Arm) and at least <b>6 redberries</b>, better 12, from the bush next to them"]}],
["RJ","Give the potion to Juliet, then tell Romeo to meet her in the crypt. Quest done. Lamp on <b>Herblore</b>",{}]
]},
{name:"Priest in Peril and Nature Spirit",loc:"Paterdomus, then Canifis and Mort Myre",
 inv:{have:"Bucket, 50 rune essence, food, combat gear, ghostspeak amulet, silver sickle",bank:""},
 steps:[
["PIP","Talk to <b>King Roald</b> in Varrock palace",{}],
["BAR","On the way east: barcrawl drink at the <b>Jolly Boar Inn</b> north-east of Varrock",{}],
["RB1","Talk to the <b>Odd Old Man</b> at the mine west of Paterdomus to start Rag and Bone Man I. You come back with bones later",{loc:"Odd_Old_Man"}],
["PIP","At the Paterdomus temple, knock and kill the <b>temple guardian</b> in the mausoleum north of the temple",{fight:"Temple guardian (30)"}],
["PIP","Back to King Roald, then to the temple. Kill the monk with the <b>golden key</b>, swap it in the monument for the <b>iron key</b>, and unlock Drezel's cell on the top floor",{fight:"Monks of Zamorak (22)"}],
["PIP","Fill the bucket at the well in the mausoleum, have Drezel bless it, and pour it on the coffin. Then bring <b>50 rune essence</b> to Drezel past the barrier. Quest done",{sub:["You can now enter Morytania. Bank the pies Drezel gives you: you need the pie dishes later"]}],
["","In Canifis: buy <b>20–30 raw trout</b> at Rufus' Meat Emporium (cook 10 for Death Plateau) and a <b>bag of salt</b> from Mazchna (Icthlarin's Little Helper)",{}],
["NS","Nature Spirit: talk to Drezel under the temple, then find <b>Filliman Tarlock</b>'s ghost in the grotto in Mort Myre swamp (wear the ghostspeak amulet)",{}],
["NS","Show him the <b>mirror</b> (from his grotto area) and give him his <b>journal</b>. Drezel blesses you; then Filliman needs three things from nature",{det:["The wiki lists the three items (a fungus, a natural item and the 'spirit' item) and the stone each goes on."]}],
["NS","Kill <b>3 ghasts</b> with bloomed Mort Myre fungus in your druid pouch, then talk to Filliman, who becomes the Nature Spirit. Quest done",{fight:"Ghasts (30)",req:{combat:30},sub:["Pray at the altar in the Nature Grotto: easy Morytania Diary"]}]
]},
{name:"Recruitment Drive and the end of the barcrawl",loc:"Falador, Barbarian Outpost",
 inv:{have:"Nothing: Recruitment Drive needs an empty inventory and no worn items",bank:"Everything"},
 steps:[
["RD","Talk to <b>Sir Amik Varze</b>, then <b>Sir Tiffy Cashien</b> in Falador Park",{}],
["RD","Pass five tests at the training grounds. Each test is a small puzzle (fox, chicken and grain; statues; a riddle; and so on). Quest done",{det:["You get 5 of the 7 tests at random. The wiki lists the answer to each."]}],
["BAR","Back to the <b>Barbarian guard</b> at the Barbarian Outpost with your barcrawl card. Barcrawl done",{sub:["Unlocks the Barbarian Outpost agility course: Scorpion Catcher and Horror from the Deep need it"]}]
]},
{name:"Anti-dragon shield and Scorpion Catcher",loc:"Champions' Guild, Lumbridge, Sorcerer's Tower, Taverley Dungeon",
 inv:{have:"Food, combat gear, superantipoison, logs, tinderbox",bank:""},
 steps:[
["DRG","Talk to the <b>Guildmaster</b> in the Champions' Guild, then <b>Oziach</b> in Edgeville, then the Guildmaster again (ask all the questions)",{req:{qp:32},sub:["Jump the fence south-east of the guild: easy Varrock Diary"]}],
["DRG","Talk to <b>Duke Horacio</b> in Lumbridge castle for the <b>anti-dragon shield</b>. Stop Dragon Slayer here for now",{}],
["SC","Talk to <b>Thormac</b> at the top of the Sorcerer's Tower, south of Seers' Village",{loc:"Thormac"}],
["RB1","Near the tower, for Rag and Bone Man I: kill a <b>ram</b> (ram skull), a <b>grizzly bear</b> in the mine south of the tower (bear ribs, keep the fur too) and a <b>giant bat</b> east of the tower (giant bat wing)",{}],
["SC","Ask the <b>Seer</b> in Seers' Village where the scorpions are. Get the dusty key and the mirror he asks for",{}],
["SC","Catch the three scorpions with the cage: Taverley Dungeon (behind the dusty-key gate, past the blue dragons: anti-dragon shield on), the Barbarian Outpost agility area, and upstairs in Edgeville Monastery",{fight:"Blue dragons nearby",warn:true,sub:["Cross the crumbling wall in west Falador on the way: easy Falador Diary"]}],
["SC","Bring the full cage to Thormac. Quest done",{}]
]},
{name:"Karamja: Jungle Potion",loc:"Tai Bwo Wannai",
 inv:{have:"Food, small fishing net (optional)",bank:""},
 steps:[
["JP","Talk to <b>Trufitus</b> in Tai Bwo Wannai",{req:{herblore:3},loc:"Trufitus"}],
["JP","Find and clean the five herbs one by one: <b>snake weed</b>, <b>ardrigal</b>, <b>sito foil</b>, <b>volencia moss</b> and <b>rogue's purse</b>",{sub:["Take extras: 2 snake weed (Zogre Flesh Eaters, Legends'), 1 ardrigal (Legends'), 1 volencia moss (Fairytale I), 1 rogue's purse (Zogre)","Rogue's purse is in the Pothole Dungeon: kill a jogre there for the Karamja Diary","Kill a monkey for a <b>monkey paw</b> (Rag and Bone Man I)"]}],
["JP","Talk to Trufitus with the last herb. Quest done",{}],
["","Buy <b>15 bread</b> at Jiminua's Jungle Store, south of Brimhaven. Pick <b>5 seaweed</b> on the west coast (Karamja Diary)",{}]
]},
{name:"Draynor: A Porcine of Interest and Rag and Bone Man",loc:"Draynor Village, Lumbridge Swamp, Paterdomus",
 inv:{have:"8 pots, coins, logs, tinderbox, food",bank:""},
 steps:[
["API","Start A Porcine of Interest in Draynor Village and follow it. While talking to <b>Sarah</b>, buy <b>10 empty sacks</b>",{sub:["Fill 2 sacks with potatoes from the field east of Draynor (Enlightened Journey, Mourning's End Part II)"]}],
["RB1","In Draynor: buy <b>8 jugs of vinegar</b> at the wine shop and fill the 8 pots. Kill a goblin south of the village for a <b>goblin skull</b>",{}],
["RB1","Lumbridge Swamp: <b>unicorn bone</b> (keep the horn: Ratcatchers), <b>giant rat bone</b> and <b>big frog leg</b>",{sub:["Pick up <b>6 swamp tar</b> while you're there"]}],
["RB1","Bring all 8 bones to the <b>Odd Old Man</b>. Put each in a pot of vinegar and boil it on his pot boiler with logs. Quest done",{}],
["RB2","Rag and Bone Man II starts right away. Kill a bat nearby for a <b>bat wing</b>; the other bones come up during later quests",{}]
]},
{name:"Death Plateau",loc:"Burthorpe",
 inv:{have:"Iron bar, 10 cooked trout, 10 bread, blurb' special, coins, climbing boots money",bank:""},
 steps:[
["","Get an <b>iron bar</b>, plus 2 spare for The Knight's Sword. You can't smith one yet",{sub:["Iron bars spawn north-west of the Ferox Enclave and at the Sunset Coast (Varlamore), or drop from Paladins in Ardougne"]}],
["DP","Talk to <b>Denulth</b> in Burthorpe castle, then <b>Eohric</b> upstairs and <b>Harold</b> in the Toad and Chicken inn",{}],
["DP","Get Harold drunk with the <b>blurb' special</b> and win his IOU at dice. The combination on it opens the equipment room door",{}],
["DP","Put the <b>stone balls</b> on the stone mechanism in the right order to open the room",{}],
["DP","Find the secret path: talk to <b>Saba</b> in the cave and <b>Tenzing</b> the Sherpa, who wants the spiked boots",{sub:["Dunstan in Burthorpe spikes climbing boots with the iron bar"]}],
["DP","Follow the path, mark it with the stones, and report to Denulth. Quest done",{}]
]}
],"Chapter 3 starts in Lumbridge. Hundreds of small items get picked up here for much later quests; each step says what they're for.");
