var c = Object.defineProperty, f = Object.defineProperties;
var n = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var a = (o, e, r) => e in o ? c(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, i = (o, e) => {
  for (var r in e || (e = {}))
    p.call(e, r) && a(o, r, e[r]);
  if (t)
    for (var r of t(e))
      s.call(e, r) && a(o, r, e[r]);
  return o;
}, m = (o, e) => f(o, n(e));
import l, { forwardRef as d } from "react";
import w from "../lib/IconBase.mjs";
import C from "../defs/CoinVertical.mjs";
const I = d((o, e) => /* @__PURE__ */ l.createElement(w, m(i({ ref: e }, o), { weights: C })));
I.displayName = "CoinVertical";
export {
  I as CoinVertical
};
