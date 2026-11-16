/* Chapter 8: Mid-game (Meat and Greet → Enakhra's Lament). */
addQuests({
MAG:["Meat and Greet",1,"Meat_and_Greet"],
RFDL:["RFD: Freeing the Lumbridge Guide",1,"Recipe_for_Disaster/Freeing_the_Lumbridge_Guide"],
RFDS:["RFD: Freeing Skrach Uglogwee",1,"Recipe_for_Disaster/Freeing_Skrach_Uglogwee"],
HM:["Haunted Mine",2,"Haunted_Mine"],
CON:["Contact!",1,"Contact!"],
MM1:["Monkey Madness I",3,"Monkey_Madness_I"],
OQ:["Olaf's Quest",1,"Olaf%27s_Quest"],
TOG:["Tears of Guthix",1,"Tears_of_Guthix_(quest)"],
OSF:["One Small Favour",2,"One_Small_Favour"],
TSM:["The Slug Menace",1,"The_Slug_Menace"],
BAR2:["Between a Rock...",2,"Between_a_Rock..."],
CW:["Cold War",1,"Cold_War"],
UP:["Underground Pass",5,"Underground_Pass"],
SATM:["Skippy and the Mogres",0,"Skippy_and_the_Mogres"],
LOTR:["Lair of Tarn Razorlor",0,"Lair_of_Tarn_Razorlor"],
CA:["Current Affairs",1,"Current_Affairs"],
CRAB:["Crab Quest",1,"Crab_Quest"],
RUM:["Rum Deal",2,"Rum_Deal"],
CF:["Cabin Fever",2,"Cabin_Fever"],
HFS:["His Faithful Servants",0,"His_Faithful_Servants"],
TGBR:["The Great Brain Robbery",2,"The_Great_Brain_Robbery"],
SCR:["Scrambled!",1,"Scrambled!"],
HITS:["The Hand in the Sand",1,"The_Hand_in_the_Sand"],
EL:["Enakhra's Lament",2,"Enakhra%27s_Lament"]
});

chapter(8,"Mid-game: monkeys, slugs and the sea",[
{name:"Kebos, Varlamore and Lumbridge",loc:"",
 inv:{have:"Food, combat gear",bank:""},
 steps:[
["MAG","Meat and Greet, in the Kebos Lowlands",{sub:["A newer quest: follow the wiki quick guide through the tag link"]}],
["","Train <b>Cooking</b> to 41",{}],
["RFDL","Freeing the Lumbridge Guide: answer his quiz questions from the wizards of the Wizards' Tower and the cooks",{req:{cooking:40}}],
["RFDS","Freeing Skrach Uglogwee: the ogres in Feldip Hills, with the ogre bow",{req:{cooking:41,firemaking:20}}],
["HM","Haunted Mine: optional now. The boss is tough and it unlocks nothing; leave it until your combat stats are 60+",{req:{crafting:35,agility:15},fight:"Treus Dayth (95)",warn:true}],
["CON","Contact!: the High Priest in Sophanem. Two combat lamps on <b>Magic</b>",{fight:"Giant scarab (191)",warn:true}]
]},
{name:"Monkey Madness I",loc:"Gnome Stronghold, Karamja, Ape Atoll",
 inv:{have:"Food, prayer potions, combat gear",bank:""},
 steps:[
["MM1","Monkey Madness I: <b>King Narnode</b>, then Ape Atoll via the gnome glider. Get the monkey greegree and the monkey talisman",{fight:"Jungle demon (195): safespot with magic",req:{combat:60},warn:true,sub:["Claim <b>4 extra monkey talismans</b> from the monkey child (world hop)","Kill a monkey guard, archer and zombie in the Ape Atoll dungeon and keep their bones"]}],
["MM1","After the quest: <b>Daero</b> in the Grand Tree trains you: 35,000 Attack and Defence, 20,000 Strength and Hitpoints XP",{}],
["","Train <b>Firemaking</b> to 50",{sub:["Unlocks the balloon to Varrock with willow logs"]}]
]},
{name:"Entrana, Fremennik and Lumbridge Swamp",loc:"",
 inv:{have:"Food, combat gear",bank:""},
 steps:[
["OQ","Olaf's Quest: <b>Olaf</b> on the Fremennik coast south of Rellekka",{req:{firemaking:40,woodcutting:50},fight:"Ulfric (100)"}],
["TOG","Tears of Guthix: <b>Juna</b> in the Lumbridge Swamp Caves. Bring the sapphire lantern",{req:{firemaking:49,crafting:20,mining:20},sub:["Unlocks the weekly Tears of Guthix minigame: free XP in your lowest skill"]}],
["","Train <b>Ranged</b> to 40",{}],
["OSF","One Small Favour: <b>Yanni Salika</b> in Shilo Village. A long chain of favours across the map",{req:{agility:36,crafting:25,herblore:18,smithing:30},sub:["Lamp on Herblore"]}],
["","Train <b>Smithing</b> to 50 and <b>Slayer</b> to 30",{}]
]},
{name:"Slugs, rocks and penguins",loc:"Witchaven, Keldagrim, Ice Mountain",
 inv:{have:"Food, combat gear",bank:""},
 steps:[
["TSM","The Slug Menace: <b>Sir Tiffy Cashien</b> in Falador Park, then Witchaven",{req:{crafting:30,runecraft:30,slayer:30,thieving:30},fight:"Mother (slug queen)"}],
["BAR2","Between a Rock...: <b>Dondakan</b> in the dwarf mine under White Wolf Mountain",{req:{defence:30,mining:40,smithing:50},fight:"Arzinian Avatar of Strength, Ranging and Magic"}],
["","Train <b>Construction</b> to 34",{sub:["Build a workshop and crafting table 3 in your house while you're at it"]}],
["CW","Cold War: <b>Larry</b> at the Ardougne Zoo. Bring swamp tar and a clockwork suit",{req:{hunter:10,agility:30,crafting:30,construction:34,thieving:15}}],
["UP","Underground Pass: <b>King Lathas</b> in Ardougne, then the pass west of Ardougne",{req:{ranged:25},fight:"Iban and his minions",sub:["Disciples of Iban always drop Zamorak robes: stock up, they're gone after the quest"]}]
]},
{name:"Slayer and the last bones",loc:"Ardougne, Port Sarim, Fremennik Slayer Dungeon",
 inv:{have:"Mirror shield, food, combat gear",bank:""},
 steps:[
["","Train <b>Slayer</b> to 42",{}],
["SATM","Skippy and the Mogres: <b>Skippy</b> in Port Sarim. Give him the hangover cure and nettle tea",{sub:["Kill mogres for a <b>mogre bone</b>; ice giants for <b>ice giant ribs</b>"]}],
["RB2","Fremennik Slayer Dungeon (mirror shield): kill basilisks for a <b>basilisk bone</b>. Then bring all the bones to the Odd Old Man. Rag and Bone Man II done",{req:{slayer:40}}],
["LOTR","Lair of Tarn Razorlor, in Morytania. Kill a terror dog (medium Morytania Diary)",{req:{slayer:40}}]
]},
{name:"Sailing quests",loc:"",
 inv:{have:"Your boat",bank:""},
 steps:[
["","Train <b>Sailing</b> to 22",{}],
["CA","Current Affairs",{sub:["A newer Sailing quest: follow the wiki quick guide through the tag link"]}],
["","Train <b>Sailing</b> to 42",{}],
["CRAB","Crab Quest",{sub:["A newer Sailing quest: follow the wiki quick guide through the tag link"]}],
["","Train <b>Fishing</b> to 50, <b>Prayer</b> to 47, <b>Farming</b> to 41",{}],
["RUM","Rum Deal: <b>Pirate Pete</b> in Port Phasmatys",{req:{crafting:42,fishing:50,farming:40,prayer:47,slayer:42}}],
["CF","Cabin Fever: <b>Bill Teach</b> in Port Phasmatys",{req:{agility:42,crafting:45,smithing:50,ranged:40}}]
]},
{name:"Barrows, brains and eggs",loc:"Morytania, Mos Le'Harmless, Varlamore, Yanille",
 inv:{have:"Food, prayer potions, combat gear",bank:""},
 steps:[
["HFS","His Faithful Servants: the Barrows. You can kite the melee brothers in their tomb",{sub:["A big chunk of Prayer XP"]}],
["TGBR","The Great Brain Robbery: Mos Le'Harmless. Lamp on Herblore",{req:{crafting:16,construction:30,prayer:50}}],
["","Train <b>Construction</b> to 38",{}],
["SCR","Scrambled!",{sub:["A newer quest: follow the wiki quick guide through the tag link"]}],
["HITS","The Hand in the Sand: <b>Bert</b> in Yanille",{req:{thieving:17,crafting:49}}],
["","Train <b>Mining</b> to 45",{}],
["EL","Enakhra's Lament: <b>Lazim</b> south of the Kalphite Lair. Mine one extra piece of <b>granite</b> (King's Ransom)",{req:{crafting:50,firemaking:45,prayer:43,magic:39,mining:45}}]
]}
],"");
