var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, h = Object.prototype.propertyIsEnumerable;
var o = (r, e, a) => e in r ? f(r, e, { enumerable: !0, configurable: !0, writable: !0, value: a }) : r[e] = a, m = (r, e) => {
  for (var a in e || (e = {}))
    s.call(e, a) && o(r, a, e[a]);
  if (t)
    for (var a of t(e))
      h.call(e, a) && o(r, a, e[a]);
  return r;
}, c = (r, e) => i(r, p(e));
import n, { forwardRef as d } from "react";
import l from "../lib/IconBase.mjs";
import u from "../defs/Parachute.mjs";
const w = d((r, e) => /* @__PURE__ */ n.createElement(l, c(m({ ref: e }, r), { weights: u })));
w.displayName = "Parachute";
export {
  w as Parachute
};
