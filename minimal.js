var startsite = new Site("start");

startsite.reachable = true;
startsite.description  = "helló világ";
startsite.addOption("bumm1", function(){printc(this.name);});
startsite.addOption("bumm2", function(){printc(this.name);});

var seconds = new Site("second");

seconds.reachable = true;
seconds.description  = "helló második világ";
seconds.addOption("nyit", function(){
	thirds.reachable = true;
	printc("third nyitva");
	refresh_ui();
});

newlontool = new Tool("newlontool");
newlontool.owned = true;

var thirds = new Site("third");

thirds.reachable = false;
thirds.description  = "helló haradik világ";

thirds.addToolRelay("newlontool", function(){
	printc("nem, a nyúl az!");
});