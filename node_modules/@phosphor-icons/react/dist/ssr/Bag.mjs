var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, g = Object.prototype.propertyIsEnumerable;
var t = (r, e, a) => e in r ? i(r, e, { enumerable: !0, configurable: !0, writable: !0, value: a }) : r[e] = a, m = (r, e) => {
  for (var a in e || (e = {}))
    c.call(e, a) && t(r, a, e[a]);
  if (o)
    for (var a of o(e))
      g.call(e, a) && t(r, a, e[a]);
  return r;
}, f = (r, e) => p(r, s(e));
import B, { forwardRef as R } from "react";
import d from "../lib/SSRBase.mjs";
import l from "../defs/Bag.mjs";
const n = R((r, e) => /* @__PURE__ */ B.createElement(d, f(m({ ref: e }, r), { weights: l })));
n.displayName = "Bag";
export {
  n as Bag
};
