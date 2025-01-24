var f = Object.defineProperty, i = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, h = Object.prototype.propertyIsEnumerable;
var t = (e, r, o) => r in e ? f(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o, m = (e, r) => {
  for (var o in r || (r = {}))
    c.call(r, o) && t(e, o, r[o]);
  if (a)
    for (var o of a(r))
      h.call(r, o) && t(e, o, r[o]);
  return e;
}, p = (e, r) => i(e, s(r));
import n, { forwardRef as d } from "react";
import l from "../lib/IconBase.mjs";
import w from "../defs/Graph.mjs";
const G = d((e, r) => /* @__PURE__ */ n.createElement(l, p(m({ ref: r }, e), { weights: w })));
G.displayName = "Graph";
export {
  G as Graph
};
