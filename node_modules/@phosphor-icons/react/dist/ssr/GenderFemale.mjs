var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var d = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var o = (r, e, m) => e in r ? i(r, e, { enumerable: !0, configurable: !0, writable: !0, value: m }) : r[e] = m, t = (r, e) => {
  for (var m in e || (e = {}))
    d.call(e, m) && o(r, m, e[m]);
  if (a)
    for (var m of a(e))
      l.call(e, m) && o(r, m, e[m]);
  return r;
}, f = (r, e) => p(r, s(e));
import n, { forwardRef as c } from "react";
import R from "../lib/SSRBase.mjs";
import w from "../defs/GenderFemale.mjs";
const F = c((r, e) => /* @__PURE__ */ n.createElement(R, f(t({ ref: e }, r), { weights: w })));
F.displayName = "GenderFemale";
export {
  F as GenderFemale
};
