var s = Object.defineProperty, d = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, R = Object.prototype.propertyIsEnumerable;
var m = (r, e, a) => e in r ? s(r, e, { enumerable: !0, configurable: !0, writable: !0, value: a }) : r[e] = a, o = (r, e) => {
  for (var a in e || (e = {}))
    p.call(e, a) && m(r, a, e[a]);
  if (t)
    for (var a of t(e))
      R.call(e, a) && m(r, a, e[a]);
  return r;
}, i = (r, e) => d(r, f(e));
import c, { forwardRef as g } from "react";
import k from "../lib/SSRBase.mjs";
import l from "../defs/TrademarkRegistered.mjs";
const n = g((r, e) => /* @__PURE__ */ c.createElement(k, i(o({ ref: e }, r), { weights: l })));
n.displayName = "TrademarkRegistered";
export {
  n as TrademarkRegistered
};
