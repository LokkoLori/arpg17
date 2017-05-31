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
};

function createButton(html, cssclass){
	var iDiv = document.createElement('div');
	iDiv.innerHTML = html;
	iDiv.className = cssclass;
	iDiv.style.cursor = "pointer";
	return iDiv;
};

function Clickable(name, cstyle){
	this.name = name;
	this.button = null;
	this.cstyle = cstyle;
	this.setbutton(name);
};
Clickable.prototype.setbutton = function(html){
	this.button = createButton(html, this.cstyle);
};

function Tool(name){
	Clickable.call(this, name, "toolbutton");
	this.descripion = "";
	this.owned = false;
	tools[name] = this;
	var ethis = this;
	this.button.onclick = function(){
		actsite.usetool(ethis);
	}
};
Tool.prototype = Object.create( Clickable.prototype );

function Optionc(name, owner, action){
	Clickable.call(this, name, "optionbutton");
	this.owner = owner;
	this.action = action;
};
Optionc.prototype = Object.create( Clickable.prototype );

function Site(name){
	Clickable.call(this, name, "sitebutton")
	this.description = "";
	this.img = "images/"+name+".jpg";
	this.options = [];
	this.vars = {};
	this.reachable = false;
	sites[name] = this
	var ethis = this
	this.button.onclick = function(){
		refresh(ethis);
	}
	this.toolrelays = []
	
};
Site.prototype = Object.create( Clickable.prototype );


Site.prototype.addOption = function(name, action){
	o = new Optionc(name, this, action);
	o.button.onclick = action;
	this.options.push(o);
};

Site.prototype.addToolRelay = function(toolname, action) {
	this.toolrelays.push([toolname, action]);
}

Site.prototype.usetool = function(tool){
	for (var relay of this.toolrelays){
		if (relay[0] == tool.name){
			relay[1]()
			return;
		}
	}
	printc(tool.name + " itt nem használható");
};

Site.prototype.show = function(){
	picture.innerHTML = "<img src='" + this.img + "'/>";
	clearchildren(options);
	for (var o of this.options){
		options.appendChild(o.button);
	}
	console.innerHTML = this.description;
	actsite = this;
};

var actsite = null;

function refresh(site){
	if (!site){
		if (actsite){
			site = actsite;
		} else {
			site = sites["start"];
		}
	}
	clearchildren(sites);
	for (var s in sites){
		if (sites[s].reachable && sites[s] != site){
			places.appendChild(sites[s].button);
		}
	}
	clearchildren(tools)
	for (var t in tools){
		if (tools[t].owned){
			inventory.appendChild(tools[t].button);
		}
	}
	site.show();
}

function printc(text){
	console.innerHTML += "<div>"+text+"</div>";
};

function start(){
	picture = document.getElementById("picture");
	console = document.getElementById("console");
	options = document.getElementById("options");
	inventory = document.getElementById("inventory");
	places = document.getElementById("places");
	refresh();
};