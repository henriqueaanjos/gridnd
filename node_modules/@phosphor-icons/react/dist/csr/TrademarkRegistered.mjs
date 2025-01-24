var s = Object.defineProperty, d = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var m = (r, e, a) => e in r ? s(r, e, { enumerable: !0, configurable: !0, writable: !0, value: a }) : r[e] = a, o = (r, e) => {
  for (var a in e || (e = {}))
    p.call(e, a) && m(r, a, e[a]);
  if (t)
    for (var a of t(e))
      c.call(e, a) && m(r, a, e[a]);
  return r;
}, i = (r, e) => d(r, f(e));
import R, { forwardRef as g } from "react";
import n from "../lib/IconBase.mjs";
import k from "../defs/TrademarkRegistered.mjs";
const l = g((r, e) => /* @__PURE__ */ R.createElement(n, i(o({ ref: e }, r), { weights: k })));
l.displayName = "TrademarkRegistered";
export {
  l as TrademarkRegistered
};
