"use strict";

var Bintree = module.exports = function() {
	this.root = undefined;
};

Bintree.prototype.insert = function(k, v) {
	if(this.root !== undefined) {
		this.root.insert(k, v);
	} else {
		this.root = new Node(k, v);
	}
};

Bintree.prototype.member = function(k) {
	if(this.root !== undefined) {
		return this.root.member(k);
	} else {
		return false;
	}
};

Bintree.prototype.lookup = function(k) {
	if(this.root !== undefined) {
		return this.root.lookup(k);
	}
};

Bintree.prototype.pairs = function() {
	var v = [];
	if(this.root !== undefined) {
		this.root.pairsUnto(v);
	}
	return v;
};

var Node = function(k, v, l, r) {
	this.k = k;
	this.v = v;
	this.l = l;
	this.r = r;
}


Node.prototype.insert = function(k, v) {
	if(this.k === k) {
		this.k = k;
		this.v = v;
	} else if(this.k > k) {
		if(this.l !== undefined) {
			this.l.insert(k, v);
		} else {
			this.l = new Node(k, v);
		}
	} else {
		if(this.r !== undefined) {
			this.r.insert(k, v);
		} else {
			this.r = new Node(k, v);
		}
	}
};

Node.prototype.member = function(k) {
	if(this.k === k) {
		return true;
	} else if(this.k > k) {
		if(this.l !== undefined) {
			return this.l.member(k);
		} else {
			return false;
		}
	} else {
		if(this.r !== undefined) {
			return this.r.member(k);
		} else {
			return false;
		}
	}
};

Node.prototype.lookup = function(k) {
	if(this.k === k) {
		return this.v;
	} else if(this.k > k) {
		if(this.l !== undefined) {
			return this.l.lookup(k);
		}
	} else {
		if(this.r !== undefined) {
			return this.r.lookup(k);
		}
	}
};

Node.prototype.pairsUnto = function(v) {
	if(this.l !== undefined) {
		this.l.pairsUnto(v);
	}
	v.push([this.k, this.v]);
	if(this.r !== undefined) {
		this.r.pairsUnto(v);
	}
}
