var picture
var console
var options
var inventory
var places

function tool(name){
	this.name = name;
	this.body = name;
	this.descripion = "";
	this.owned = False;
};

function optionc(name){
	this.name = name;
	this.body = name;
}

var tools = {};
var sites = {};

function site(name){
	this.name = name;
	this.body = name;
	this.description = "";
	this.img = "";
	this.options = [];
	this.vars = {};
	this.reachable = false;
	sites[name] = this
};

site.prototype.usetool = function(tool){
}
site.prototype.addOption = function(option){
	this.options.push(option)
}
site.prototype.show = function(){
	picture.innerHTML = "<div>" + this.name + "</div><img src='" + this.img + "'/>";
	ostr = "";
	for (var o of this.options){
		ostr += o.body;
	}
	options.innerHTML = ostr;
	console.innerHTML = this.description;
}

function refresh_ui(site){
	sstr = "";
	for (var s in sites){
		if (sites[s].reachable){
			sstr = sites[s].body
		}
	}
	places.innerHTML = sstr;
	tstr = "";
	for (var t in tools){
		if (tools[t].owned){
			tstr = tools[t].body
		}
	}
	inventory.innerHTML = sstr;
	if (!site){
		site = sites["start"]
	}
	site.show()
}

function start(){
	picture = document.getElementById("picture")
	console = document.getElementById("console")
	options = document.getElementById("options")
	inventory = document.getElementById("inventory")
	places = document.getElementById("places")
	refresh_ui();
}

var startsite = new site("start")

startsite.reachable = true
startsite.img  = "images/arok.jpg"
startsite.description  = "helló világ"
startsite.addOption(new optionc("hello"))