var picture
var console
var options
var inventory
var places

var tools = {};
var sites = {};


function clearchildren(node){
	while (node.firstChild) {
		node.removeChild(node.firstChild);
	}
}

function createButton(html, cssclass){
	var iDiv = document.createElement('div');
	iDiv.innerHTML = html;
	iDiv.className = cssclass;
	return iDiv;
}

function Clickable(name, cstyle){
	this.name = name;
	this.button = null;
	this.cstyle = cstyle;
	this.setbutton(name);
}
Clickable.prototype.setbutton = function(html){
	this.button = createButton(html, this.cstyle);
}

function Tool(name){
	Clickable.call(this, name, "toolbutton");
	this.descripion = "";
	this.owned = False;
	tools[name] = this;
};
Tool.prototype = Object.create( Clickable.prototype );

function Optionc(name, owner, action){
	Clickable.call(this, name, "optionbutton");
	this.owner = owner;
	this.action = action;
}
Optionc.prototype = Object.create( Clickable.prototype );

function Site(name){
	Clickable.call(this, name, "sitebutton")
	this.description = "";
	this.img = "";
	this.options = [];
	this.vars = {};
	this.reachable = false;
	sites[name] = this
};
Site.prototype = Object.create( Clickable.prototype );
Site.prototype.usetool = function(tool){
}
Site.prototype.addOption = function(name, action){
	this.options.push(new Optionc(name, this, action))
}
Site.prototype.show = function(){
	picture.innerHTML = "<div>" + this.name + "</div><img src='" + this.img + "'/>";
	ostr = "";
	for (var o of this.options){
		options.appendChild(o.button)
	}
	options.innerHTML = ostr;
	console.innerHTML = this.description;
}

function refresh_ui(site){
	clearchildren(sites)
	for (var s in sites){
		if (sites[s].reachable){
			places.appendChild(sites[s].button)
		}
	}
	clearchildren(tools)
	for (var t in tools){
		if (tools[t].owned){
			tool.appendChild(tools[t].button)
		}
	}
	if (!site){
		site = sites["start"]
	}
	site.show()
}

function printc(text){
	console.innerHTML += "<div>"+text+"</div>";
}

function start(){
	picture = document.getElementById("picture")
	console = document.getElementById("console")
	options = document.getElementById("options")
	inventory = document.getElementById("inventory")
	places = document.getElementById("places")
	refresh_ui();
}

var startsite = new Site("start")

startsite.reachable = true
startsite.img  = "images/arok.jpg"
startsite.description  = "helló világ"
startsite.addOption("hello", function(){})