var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var r = (a, e, t) => e in a ? f(a, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : a[e] = t, n = (a, e) => {
  for (var t in e || (e = {}))
    s.call(e, t) && r(a, t, e[t]);
  if (o)
    for (var t of o(e))
      c.call(e, t) && r(a, t, e[t]);
  return a;
}, m = (a, e) => i(a, p(e));
import l, { forwardRef as g } from "react";
import d from "../lib/IconBase.mjs";
import w from "../defs/FlagPennant.mjs";
const F = g((a, e) => /* @__PURE__ */ l.createElement(d, m(n({ ref: e }, a), { weights: w })));
F.displayName = "FlagPennant";
export {
  F as FlagPennant
};
