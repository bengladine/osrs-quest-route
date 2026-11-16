/* Chapter 6: Morytania, the Museum and Feldip (Ratcatchers → Dragon Slayer I). */
addQuests({
RAT:["Ratcatchers",2,"Ratcatchers"],
RFDE:["RFD: Freeing Evil Dave",1,"Recipe_for_Disaster/Freeing_Evil_Dave"],
GA:["Ghosts Ahoy",2,"Ghosts_Ahoy"],
COF:["Creature of Fenkenstrain",2,"Creature_of_Fenkenstrain"],
SOM:["Shades of Mort'ton",3,"Shades_of_Mort%27ton"],
TOI:["Temple of Ikov",1,"Temple_of_Ikov"],
BATW:["The Birds and the Wasps",1,"The_Birds_and_the_Wasps"],
BV:["Bone Voyage",1,"Bone_Voyage"],
TT2:["The Tourist Trap",2,"The_Tourist_Trap"],
WAN:["Wanted!",1,"Wanted!"],
ERN:["Ernest the Chicken",4,"Ernest_the_Chicken"],
AM:["Animal Magnetism",1,"Animal_Magnetism"],
IC:["Imp Catcher",1,"Imp_Catcher"],
WT:["Watchtower",4,"Watchtower"],
FGT:["Forgettable Tale...",2,"Forgettable_Tale..."],
BCB:["Big Chompy Bird Hunting",2,"Big_Chompy_Bird_Hunting"],
ZFE:["Zogre Flesh Eaters",1,"Zogre_Flesh_Eaters"],
ASH:["Another Slice of H.A.M.",1,"Another_Slice_of_H.A.M."],
SOTE:["Spirits of the Elid",2,"Spirits_of_the_Elid"]
});

chapter(6,"Morytania, the Museum and Feldip Hills",[
{name:"Cats, ghosts and Port Phasmatys",loc:"Varrock sewers, Edgeville, Port Phasmatys",
 inv:{have:"Your cat (grown from the kitten), rat poison, unicorn horn, food",bank:""},
 steps:[
["RAT","Ratcatchers: talk to <b>Phingspet</b> in the Varrock sewers and work through the rat-catching jobs with your cat",{sub:["Kill a rat and a zombie in the sewers for a <b>rat bone</b> and <b>zombie bone</b> (Rag and Bone Man II)","Afterwards your cat can become a wily cat"]}],
["RFDE","Freeing Evil Dave: <b>Doris</b>'s house in Edgeville. Get the 9 spicy stews from the Cloak and Stagger in Shayzien",{req:{cooking:25}}],
["GA","Ghosts Ahoy: <b>Velorina</b> in Port Phasmatys, then the old crone east of the town, Necrovarus and the ship",{req:{agility:25,cooking:20},sub:["Gather <b>20 extra ecto-tokens</b> (Animal Magnetism) and an extra <b>nettle tea</b> (Skippy and the Mogres)","Unlocks the ectophial and free entry to Port Phasmatys"]}],
["MH","Making History in Port Phasmatys: smelt a <b>sapphire amulet</b> (gold bar + cut sapphire + amulet mould), string it, give it to <b>Melina</b>, and get the scroll from <b>Droalak</b>",{}]
]},
{name:"Morytania quests",loc:"Fenkenstrain's Castle, Mort'ton",
 inv:{have:"7 bronze wire, spade, food, combat gear",bank:""},
 steps:[
["COF","Creature of Fenkenstrain: <b>Dr Fenkenstrain</b> in his castle west of Canifis. Collect the body parts and build the lightning conductor with bronze wire",{req:{crafting:20,thieving:25},sub:["Make <b>7 bronze wire</b> first: 3 here, 4 for Freeing Pirate Pete and Shilo Village","Kill an experiment in the cave for an <b>experiment bone</b>"]}],
["SOM","Shades of Mort'ton: <b>Razmire Keelgan</b> in Mort'ton. Make serum 208 and rebuild the temple",{req:{crafting:20,herblore:15,firemaking:5},sub:["Buy <b>11 swamp paste</b> at the builder's store","Afterwards take Herbi Flax's diary to the Varrock Apothecary for Herblore XP"]}],
["MH","Finish Making History: the silver merchant in Ardougne, then <b>Jorral</b> at the Outpost with the journal and scroll",{}]
]},
{name:"Temple of Ikov and the Varrock Museum",loc:"Ardougne, Varrock",
 inv:{have:"Boots of lightness, ice arrows with darts or knives, 20 limpwurt roots",bank:""},
 steps:[
["TOI","Temple of Ikov: talk to <b>Lucien</b> in the Flying Horse Inn, Ardougne, and enter the temple south of the city",{req:{thieving:42,ranged:40},fight:"Fire Warrior of Lesarkus: Protect from Magic, ice arrows",sub:["Side with the <b>Guardians of Armadyl</b>: the Armadyl pendant protects you in the God Wars Dungeon","Collect <b>20 limpwurt roots</b> from hobgoblins or hill giants"]}],
["","Varrock Museum: give <b>Historian Minas</b> upstairs the display information (three lamps on Herblore). Clean finds in the basement for 50 more kudos",{sub:["Then ask the information clerk for 3,500 Mining and 2,500 Crafting XP"]}],
["BATW","The Birds and the Wasps",{sub:["A newer quest: follow the wiki quick guide through the tag link"]}],
["BV","Bone Voyage: the barge guard at the Digsite. Needs <b>100 kudos</b>",{sub:["Opens Fossil Island"]}]
]},
{name:"Desert and Falador",loc:"Shantay Pass, Taverley Dungeon, Draynor Manor",
 inv:{have:"Food, combat gear, coins",bank:""},
 steps:[
["TT2","The Tourist Trap: <b>Irena</b> at Shantay Pass. Rescue Ana from the Desert Mining Camp",{req:{fletching:10,smithing:20},sub:["Choose <b>Agility</b> for both XP rewards","Safespot the boss by standing behind a guard"]}],
["WAN","Wanted!: <b>Sir Amik Varze</b> in Falador, then hunt Solus Dellagar",{sub:["Kill baby blue dragons in Taverley Dungeon for a <b>baby dragon bone</b>; keep a second for Mourning's End Part II"]}],
["ERN","Ernest the Chicken: <b>Veronica</b> at the Draynor Manor gate, then Professor Oddenstein upstairs. Find the pressure gauge, rubber tube and oil can. Lamp on <b>Herblore</b>",{fight:"Skeleton (22)"}],
["AM","Animal Magnetism: <b>Ava</b> in Draynor Manor, then Alice and her undead husband near Port Phasmatys",{req:{slayer:18,crafting:19,ranged:30,woodcutting:35},sub:["Bless a holy symbol at the Edgeville monastery. Buy a <b>mithril axe</b> in Auburnvale","Kill undead cows for <b>undead cow ribs</b>"]}],
["","Train <b>Mining</b> to 40",{}],
["IC","Imp Catcher: <b>Wizard Mizgog</b> in the Wizards' Tower. Kill imps for the four beads (east of Ardougne Monastery is a good spot)",{sub:["Keep the mind talismans imps drop (Falador Diary)"]}],
["WT","Watchtower: the <b>Watchtower wizard</b> in Yanille",{req:{magic:15,thieving:15,agility:25,herblore:14,mining:40}}]
]},
{name:"Dwarves, ogres and goblins",loc:"Keldagrim, Feldip Hills, Dorgesh-Kaan",
 inv:{have:"Food, combat gear, coins",bank:""},
 steps:[
["TGD","Finish The Giant Dwarf in Keldagrim. Wear H.A.M. robes when you join the Purple Pewter",{req:{crafting:12,firemaking:16,magic:33,thieving:14},sub:["Buy a <b>steel warhammer</b> at Vigr's (In Search of the Myreque)","Steal from the baker's stall and browse the stonemason (Fremennik Diary)"]}],
["FGT","Forgettable Tale...: brew in Keldagrim",{req:{cooking:22,farming:17},sub:["Save a <b>dwarven stout (m)</b> for a later boost"]}],
["BCB","Big Chompy Bird Hunting: <b>Rantz</b> in Feldip Hills",{req:{fletching:5,cooking:30,ranged:30},sub:["Kill wolves and ogres for a <b>wolf bone</b> and <b>ogre ribs</b>. Keep the ogre bow"]}],
["ZFE","Zogre Flesh Eaters: <b>Grish</b> at Jiggig",{req:{smithing:4,herblore:8,ranged:30},sub:["Kill a zogre for a <b>zogre bone</b>. Keep the black prism and a potato cactus. Lamp on Herblore"]}],
["ASH","Another Slice of H.A.M.: Dorgesh-Kaan",{req:{attack:15,prayer:25},sub:["Bring a mind talisman and tiara for a Falador Diary task at the Mind Altar"]}],
["","Train <b>Ranged</b> to 37",{}]
]},
{name:"Spirits of the Elid and Dragon Slayer I",loc:"Nardah, then Crandor",
 inv:{have:"10–15 ice coolers, food, combat gear, anti-dragon shield",bank:""},
 steps:[
["SOTE","Spirits of the Elid: <b>Awusah</b> in Nardah",{req:{magic:33,ranged:37,mining:37,thieving:37},sub:["Bones for Rag and Bone Man II nearby: desert lizard, jackal, desert snake, vulture"]}],
["DRG","Dragon Slayer I: get the three map pieces (Thalzar's from the Oracle and the magic door, Melzar's Maze, and Wormbrain in the Port Sarim jail)",{req:{qp:32},sub:["Talk to the security guard in the jail for a security book (Falador Diary)"]}],
["DRG","Buy the <b>Lady Lumbridge</b> from Klarense, fix her with 3 planks and 90 steel nails, and get Ned to captain",{}],
["DRG","Sail to Crandor and kill <b>Elvarg</b>. Quest done",{fight:"Elvarg (83)",req:{combat:45},warn:true,sub:["Unlocks the rune platebody and green d'hide body"]}]
]}
],"Chapter 6 needs a grown cat for Ratcatchers and Evil Dave: raise your kitten from Gertrude's Cat early.");
