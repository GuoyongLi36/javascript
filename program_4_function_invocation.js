document.writeln('hello, world!');
this.g = "global variable";

function functionInvocation()
{
	document.writeln("function invocation: " + this.g);
}

functionInvocation();


let obj = {
	objVar: "object variable",
	method: function ()
	{
		document.writeln("method invocation: " + this.objVar);
	}
}

let anotherObj = {g: "apply invocation"}
functionInvocation.apply(anotherObj);

let Constor = function()
{
	this.value = "construction invocation";
}

Constor.prototype.getValue = function ()
{
	document.writeln("construction invocation: " + this.value);
}

let cons = new Constor();
cons.getValue();

