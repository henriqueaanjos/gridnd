var l = Object.defineProperty, f = Object.defineProperties;
var i = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var m = (r, o, e) => o in r ? l(r, o, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[o] = e, a = (r, o) => {
  for (var e in o || (o = {}))
    p.call(o, e) && m(r, e, o[e]);
  if (t)
    for (var e of t(o))
      s.call(o, e) && m(r, e, o[e]);
  return r;
}, c = (r, o) => f(r, i(o));
import n, { forwardRef as d } from "react";
import w from "../lib/IconBase.mjs";
import I from "../defs/Scroll.mjs";
const R = d((r, o) => /* @__PURE__ */ n.createElement(w, c(a({ ref: o }, r), { weights: I })));
R.displayName = "Scroll";
export {
  R as Scroll
};
