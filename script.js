var picture = document.GetElementById["picture"]
var console = document.GetElementById["console"]
var options = document.GetElementById["options"]
var inventory = document.GetElementById["inventory"]
var places = document.GetElementById["places"]

function tool(name){
	this.name = name;
	this.body = "";
	this.descripion = "";
	this.owned = False;
};

var tools = {
};

function site(name){
	this.name = name;
	this.body = "";
	this.description = ""
	this.img = "";
	this.options = [];
	this.vars = {};
	this.reachable = False;
};

site.prototype.usetool = function(tool){
}

site.prototype.show = function(){
	picture.innerHTML = "<div>" + this.name + "</div><img src='" + this.img + "'/>";
	ostr = "";
	for (var o in this.options){
		ostr += o.body;
	}
	options.innerHTML = ostr;
	console.innerHTML = this.description;
}

var sites = {
};

function refresh_ui(site){
	sstr = "";
	for (var s in sites){
		if s.reachable{
			sstr = s.body
		}
	}
	places.innerHTML = sstr;
	tstr = "";
	for (var t in tools){
		if t.ownes{
			tstr = t.body
		}
	}
	inventory.innerHTML = sstr;
	if not(site)
		site = sites["start"]
	}
	site.show()
}

function start(){
	refresh_ui();
}