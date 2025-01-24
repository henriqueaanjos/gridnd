var l = Object.defineProperty, f = Object.defineProperties;
var i = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var n = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (r, e, a) => e in r ? l(r, e, { enumerable: !0, configurable: !0, writable: !0, value: a }) : r[e] = a, m = (r, e) => {
  for (var a in e || (e = {}))
    n.call(e, a) && o(r, a, e[a]);
  if (t)
    for (var a of t(e))
      p.call(e, a) && o(r, a, e[a]);
  return r;
}, c = (r, e) => f(r, i(e));
import s, { forwardRef as N } from "react";
import d from "../lib/IconBase.mjs";
import u from "../defs/NuclearPlant.mjs";
const w = N((r, e) => /* @__PURE__ */ s.createElement(d, c(m({ ref: e }, r), { weights: u })));
w.displayName = "NuclearPlant";
export {
  w as NuclearPlant
};
