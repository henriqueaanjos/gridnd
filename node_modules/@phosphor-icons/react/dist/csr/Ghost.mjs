var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, h = Object.prototype.propertyIsEnumerable;
var m = (t, o, e) => o in t ? f(t, o, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[o] = e, a = (t, o) => {
  for (var e in o || (o = {}))
    c.call(o, e) && m(t, e, o[e]);
  if (r)
    for (var e of r(o))
      h.call(o, e) && m(t, e, o[e]);
  return t;
}, s = (t, o) => i(t, p(o));
import n, { forwardRef as d } from "react";
import l from "../lib/IconBase.mjs";
import w from "../defs/Ghost.mjs";
const G = d((t, o) => /* @__PURE__ */ n.createElement(l, s(a({ ref: o }, t), { weights: w })));
G.displayName = "Ghost";
export {
  G as Ghost
};
