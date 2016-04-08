//// [file.tsx]
declare module JSX {
	interface Element { }
	interface IntrinsicElements {
		[s: string]: any;
	}
}
declare var React: any;

var p1, p2, p3;
var spreads1 = <div {...p1}>{p2}</div>;
var spreads2 = <div {...p1}>{p2}</div>;
var spreads3 = <div x={p3} {...p1}>{p2}</div>;
var spreads4 = <div {...p1} x={p3} >{p2}</div>;
var spreads5 = <div x={p2} {...p1} y={p3}>{p2}</div>;


//// [file.js]
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var i = 1, n = arguments.length; i < n; i++) {
        var s = arguments[i];
        if (s != null) for (var p in s) if (s.hasOwnProperty(p)) t[p] = s[p];
    }
    return t;
};
var p1, p2, p3;
var spreads1 = React.createElement("div", __assign({}, p1), p2);
var spreads2 = React.createElement("div", __assign({}, p1), p2);
var spreads3 = React.createElement("div", __assign({x: p3}, p1), p2);
var spreads4 = React.createElement("div", __assign({}, p1, {x: p3}), p2);
var spreads5 = React.createElement("div", __assign({x: p2}, p1, {y: p3}), p2);
