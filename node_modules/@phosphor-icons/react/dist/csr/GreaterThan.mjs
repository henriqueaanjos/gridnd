var i = Object.defineProperty, n = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var o = (r, e, a) => e in r ? i(r, e, { enumerable: !0, configurable: !0, writable: !0, value: a }) : r[e] = a, m = (r, e) => {
  for (var a in e || (e = {}))
    s.call(e, a) && o(r, a, e[a]);
  if (t)
    for (var a of t(e))
      c.call(e, a) && o(r, a, e[a]);
  return r;
}, f = (r, e) => n(r, p(e));
import h, { forwardRef as d } from "react";
import l from "../lib/IconBase.mjs";
import w from "../defs/GreaterThan.mjs";
const G = d((r, e) => /* @__PURE__ */ h.createElement(l, f(m({ ref: e }, r), { weights: w })));
G.displayName = "GreaterThan";
export {
  G as GreaterThan
};
