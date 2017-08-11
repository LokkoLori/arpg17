var picture
var console
var sitedescription
var options
var inventory
var places
var leftpointer;
var rightpointer;

var tools = {};
var sites = {};

var deathcounter = 0;


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
	this.defaction = false;
	tools[name] = this;
	var ethis = this;
	this.button.onclick = function(){
		actsite.usetool(ethis);
	}
};
Tool.prototype = Object.create( Clickable.prototype );

function Optionc(name, owner, action, num){
	code = '<table><tr><td><img src="design/'+num+'button.png"/></td><td valign="center"><b>' + name + '</b></td></tr></table>'
	Clickable.call(this, code, "optionbutton");
	this.owner = owner;
	this.action = action;
};
Optionc.prototype = Object.create( Clickable.prototype );

function Site(name){
	Clickable.call(this, name, "sitebutton")
	this.description = "";
	this.img = "images/"+name+".png";
	this.options = [];
	this.vars = {};
	this.reachable = false;
	this.openAction = function(){};
	this.closeAction = function(){};
	this.deadend = false;
	sites[name] = this
	var ethis = this
	this.button.onclick = function(){
		refresh(ethis);
	}
	this.toolrelays = []
	
};
Site.prototype = Object.create( Clickable.prototype );


Site.prototype.addOption = function(name, action){
	o = new Optionc(name, this, action, this.options.length);
	o.button.onclick = action;
	this.options.push(o);
	return o;
};

Site.prototype.removeOption = function(optionobj){
	var index = this.options.indexOf(optionobj);
	if (index > -1){
		this.options.splice(index, 1);
	}
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
	if (tool.defaction){
		tool.defaction()
	} else {
		printc(tool.name + " itt nem használható");
	}
};

Site.prototype.show = function(){
	picture.innerHTML = "<img src='" + this.img + "'/>";
	clearchildren(options);
	clearchildren(console);
	if (this.deadend == true && this.options.length == 0){
		o = new Optionc("halál!", this, resurrect, 66);
		o.button.onclick = resurrect;
		this.options.push(o);
	};	
	for (var o of this.options){
		options.appendChild(o.button);
	}	
	sitedescription.innerHTML = this.description;
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
	if (actsite != site){
		if (actsite) {
			actsite.closeAction();
		}
		site.openAction();
	}
	clearchildren(places);
	for (var s in sites){
		if (sites[s].reachable && s != site.name){
			places.appendChild(sites[s].button);
		}
	}
	clearchildren(inventory)
	for (var t in tools){
		var gotja = false;
		for (var relay of site.toolrelays){
			if (relay[0] == tools[t].name){
				gotja = true;
				break;
			}
		}
		if (gotja){
			tools[t].button.className = "usetool";
		} else {
			tools[t].button.className = "uselesstool";
		}
		if (tools[t].owned){
			inventory.appendChild(tools[t].button);
		}
	}
	site.show();
}

function jump(site){
	refresh(site);
};

function resurrect(){
	jump(resursite);
};

function printc(text){
	console.innerHTML += "<div>"+text+"</div>";
};

function start(){
	picture = document.getElementById("picture");
	console = document.getElementById("console");
	sitedescription = document.getElementById("sitedescription");
	options = document.getElementById("options");
	inventory = document.getElementById("inventory");
	places = document.getElementById("places");
	leftpointer = document.getElementById("leftpoint");
	rightpointer = document.getElementById("rightpoint");
	refresh();
};