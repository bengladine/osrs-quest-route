/* Chapter 9: Heroes, the desert and the elves (Heroes' Quest → Mourning's End Part II). */
addQuests({
HQ:["Heroes' Quest",1,"Heroes%27_Quest"],
TOM:["Throne of Miscellania",1,"Throne_of_Miscellania"],
RT:["Royal Trouble",1,"Royal_Trouble"],
DT1:["Desert Treasure I",3,"Desert_Treasure_I"],
ATOH:["A Taste of Hope",1,"A_Taste_of_Hope"],
FCR:["Family Crest",1,"Family_Crest"],
LQ:["Legends' Quest",4,"Legends%27_Quest"],
RFDA:["RFD: Freeing Sir Amik Varze",1,"Recipe_for_Disaster/Freeing_Sir_Amik_Varze"],
COTEL:["Curse of the Empty Lord",0,"Curse_of_the_Empty_Lord"],
TGS:["The General's Shadow",0,"The_General%27s_Shadow"],
ASB:["A Soul's Bane",1,"A_Soul%27s_Bane"],
LOTG:["Land of the Goblins",2,"Land_of_the_Goblins"],
AKD:["A Kingdom Divided",2,"A_Kingdom_Divided"],
HOD:["The Heart of Darkness",2,"The_Heart_of_Darkness"],
PM:["Perilous Moons",2,"Perilous_Moons"],
RFDK:["RFD: Freeing King Awowogei",1,"Recipe_for_Disaster/Freeing_King_Awowogei"],
REG:["Regicide",3,"Regicide"],
RE:["Roving Elves",1,"Roving_Elves"],
MEP1:["Mourning's End Part I",2,"Mourning%27s_End_Part_I"],
MEP2:["Mourning's End Part II",2,"Mourning%27s_End_Part_II"]
});

chapter(9,"Heroes, the desert and the elves",[
{name:"Heroes' Quest and Miscellania",loc:"Burthorpe, Brimhaven, Miscellania",
 inv:{have:"Food, combat gear",bank:""},
 steps:[
["","Train in the desert: <b>Mining</b> to 50, <b>Cooking</b> to 53, <b>Fishing</b> to 53",{}],
["HQ","Heroes' Quest: <b>Achietties</b> outside the Heroes' Guild in Burthorpe. Needs a partner of the other gang (Black Arm or Phoenix) for one step",{req:{qp:55,cooking:53,fishing:53,herblore:25,mining:50},sub:["Use the chat channel <b>osrs soa</b> to find a partner"]}],
["TOM","Throne of Miscellania: <b>King Vargas</b> in Miscellania castle. Win the approval of the princess or prince",{}],
["RT","Royal Trouble: in Miscellania",{req:{agility:40,slayer:40},sub:["Then train <b>Thieving</b> to 53"]}]
]},
{name:"Desert Treasure I and Meiyerditch",loc:"Kharidian Desert, Meiyerditch",
 inv:{have:"Food, prayer potions, combat gear, magic logs",bank:""},
 steps:[
["DT1","Desert Treasure I: the <b>Archaeologist</b> at the Bedabin camp. Four bosses for the four diamonds",{req:{magic:50,firemaking:50,slayer:10,thieving:53},fight:"Dessous, Kamil, Fareed and Damis",warn:true,sub:["Needs magic logs: 75 Woodcutting, or 58 Hunter for magic log birdhouse routes","Unlocks Ancient Magicks"]}],
["","Train <b>Magic</b> to 59, <b>Mining</b> to 52, <b>Agility</b> to 50",{}],
["ATOH","A Taste of Hope: Meiyerditch",{req:{crafting:48,agility:45,attack:40,herblore:40,slayer:38}}],
["FCR","Family Crest: <b>Dimintheis</b> in Varrock. Bring the tuna and swordfish you saved",{req:{mining:40,smithing:40,magic:59,crafting:40},fight:"Chronozon: needs all four Blast spells"}]
]},
{name:"Legends' Quest and Sir Amik",loc:"Karamja jungle, Falador",
 inv:{have:"Snake weed, ardrigal, emerald, food, combat gear",bank:""},
 steps:[
["LQ","Legends' Quest: the <b>Legends' Guild</b> guard north of Ardougne. Map the Kharazi jungle, then the cave",{req:{qp:107,agility:50,crafting:50,herblore:45,magic:56,mining:52,prayer:42,smithing:50,strength:50,thieving:50,woodcutting:50},fight:"Nezikchened, Ranalph, Irvig, San Tojalon",warn:true,sub:["Bring yommi seeds and a vanilla pod as the guide notes"]}],
["RFDA","Freeing Sir Amik Varze: the evil chicken's lair in Zanaris (dramen branch)",{req:{qp:107},fight:"Black dragon",warn:true}],
["COTEL","Curse of the Empty Lord: needs a ghostspeak amulet and the ring of visibility",{}],
["TGS","The General's Shadow",{}],
["","Train <b>Farming</b> to 44",{}],
["","Medium Ardougne, Falador, Kandarin and Varrock Diaries",{}]
]},
{name:"Goblins, Zanaris and Kourend",loc:"Digsite, Kandarin, Zanaris, Great Kourend",
 inv:{have:"Food, combat gear",bank:""},
 steps:[
["ASB","A Soul's Bane: <b>Launa</b> at the rift near the Digsite",{}],
["","Train <b>Fletching</b> to 50",{}],
["LOTG","Land of the Goblins",{req:{agility:38,fishing:40,thieving:45,herblore:48}}],
["FT2","Finish Fairytale II - Cure a Queen",{req:{thieving:40,farming:49,herblore:57}}],
["","Train <b>Agility</b> to 54",{}],
["AKD","A Kingdom Divided: Great Kourend",{req:{agility:54,thieving:52,woodcutting:52,herblore:50,mining:42,crafting:38,magic:35}}],
["","Train <b>Slayer</b> to 48 and <b>Mining</b> to 55",{}],
["HOD","The Heart of Darkness: Varlamore",{req:{mining:55,thieving:48,slayer:48,agility:46}}],
["PM","Perilous Moons: Cam Torum",{req:{slayer:48,hunter:20,fishing:20,runecraft:20,construction:10}}]
]},
{name:"Ape Atoll and the elves",loc:"Ape Atoll, Tirannwn",
 inv:{have:"Food, prayer potions, combat gear",bank:""},
 steps:[
["","Train <b>Cooking</b> to 65 (Cam Torum)",{}],
["RFDK","Freeing King Awowogei: on Ape Atoll",{req:{cooking:70,agility:48},sub:["70 Cooking can be a boost from 65"]}],
["","Train <b>Agility</b> to 56",{}],
["REG","Regicide: <b>King Lathas</b> in Ardougne, then through the Underground Pass to Tirannwn",{req:{agility:56}}],
["RE","Roving Elves: <b>Islwyn</b> in Tirannwn",{fight:"Moss guardian (84)"}],
["","Train <b>Ranged</b> to 60",{}],
["MEP1","Mourning's End Part I: the mourners in West Ardougne",{req:{ranged:60,thieving:50}}],
["MEP2","Mourning's End Part II: the Temple of Light. Bring the item list you've been saving all game",{sub:["Light puzzles: the wiki has the full solution"]}]
]}
],"Chapters 9 and 10 are the long tail of the quest cape. Expect to train skills between quests; each training step says to what level.");
