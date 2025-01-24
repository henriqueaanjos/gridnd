var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, h = Object.prototype.propertyIsEnumerable;
var m = (e, o, r) => o in e ? f(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, a = (e, o) => {
  for (var r in o || (o = {}))
    s.call(o, r) && m(e, r, o[r]);
  if (t)
    for (var r of t(o))
      h.call(o, r) && m(e, r, o[r]);
  return e;
}, c = (e, o) => i(e, p(o));
import n, { forwardRef as d } from "react";
import l from "../lib/IconBase.mjs";
import u from "../defs/Couch.mjs";
const w = d((e, o) => /* @__PURE__ */ n.createElement(l, c(a({ ref: o }, e), { weights: u })));
w.displayName = "Couch";
export {
  w as Couch
};
