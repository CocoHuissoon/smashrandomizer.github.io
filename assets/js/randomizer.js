 var smashChars = ["Mario","Donkey Kong","Link","Samus","Dark Samus","Yoshi","Kirby","Fox","Pikachu","Luigi","Ness","Captain Falcon","Jigglypuff","Peach","Daisy","Bowser","Ice Climbers","Sheik","Zelda","Dr. Mario","Pichu","Falco","Marth","Lucina","Young Link","Ganondorf","Mewtwo","Roy","Chrom","Mr. Game & Watch","Meta Knight","Pit","Dark Pit","Zero Suit Samus","Wario","Snake","Ike","Pokemon Trainer","Diddy Kong","Lucas","Sonic","King Dedede","Olimar","Lucario","R.O.B.","Toon Link","Wolf","Villager","Mega Man","Wii Fit Trainer","Rosalina & Luma","Little Mac","Greninja","Mii Brawler","Mii Swordfighter","Mii Gunner","Palutena","Pac-Man","Robin","Shulk","Bowser Jr.","Duck Hunt","Ryu","Ken", "Cloud","Corrin","Bayonetta","Inkling","Ridley","Simon Belmont","Richter", "King K. Rool","Isabelle","Incineroar"];
 var pics = ["mario","donkey","link","samus","darksamus","yoshi","kirby","fox","pikachu","luigi","ness","falcon","jiggly","peach","daisy","bowser","climbers","sheik","zelda","drmario","pichu","falco","marth","lucina","younglink","ganon","mewtoo","roy","chrom","game&watch","metaknight","pit","darkpit","zerosuit","wario","snake","ike","pokemontrainer","dede","lucas","sonic","dedede","olimar","lucario","robb","toonlink","wolf","dorpsbewoner","megaman","wiifit","rosalina","mac","greninja","brawler","sword","gunner","palutena","pacman","robin","shulk","bowserjr","duckhunt","ryu","ken","cloud","corrin","bayo","inkling","ridley","simon","richter","rool","isabelle","roar"];  
    function randomize(){ 
        var nr = Math.floor(Math.random() * 75);
        document.getElementById("charpic").src= "images/charpics/" + pics[nr] +".png";

    document.getElementById("random").innerHTML =  smashChars[nr];
}
