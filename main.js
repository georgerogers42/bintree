"use strict";

var carrier = require("carrier");
var _ = require("underscore");
var Bintree = require("./bintree");

var stdin = carrier.carry(process.stdin);

var m = new Bintree();
stdin.on("line", function(line) {
	line.split(/\s+/).forEach(function(word) {
		var n = m.lookup(word);
		if(n) {
			m.insert(word, 1+n);
		} else {
			m.insert(word, 1);
		}
	});
});
stdin.on("end", function() {
	var ps = m.pairs();
	_(ps).sortBy(1).forEach(function(p) {
		console.log(p[0] + ":\t" + p[1]);
	});
});
