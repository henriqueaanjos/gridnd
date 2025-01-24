var f = Object.defineProperty, i = Object.defineProperties;
var n = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var m = (r, e, o) => e in r ? f(r, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[e] = o, a = (r, e) => {
  for (var o in e || (e = {}))
    p.call(e, o) && m(r, o, e[o]);
  if (t)
    for (var o of t(e))
      s.call(e, o) && m(r, o, e[o]);
  return r;
}, c = (r, e) => i(r, n(e));
import h, { forwardRef as d } from "react";
import l from "../lib/IconBase.mjs";
import w from "../defs/Wrench.mjs";
const I = d((r, e) => /* @__PURE__ */ h.createElement(l, c(a({ ref: e }, r), { weights: w })));
I.displayName = "Wrench";
export {
  I as Wrench
};
