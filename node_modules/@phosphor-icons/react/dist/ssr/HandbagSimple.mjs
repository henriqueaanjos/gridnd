var p = Object.defineProperty, f = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var d = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var o = (a, e, m) => e in a ? p(a, e, { enumerable: !0, configurable: !0, writable: !0, value: m }) : a[e] = m, t = (a, e) => {
  for (var m in e || (e = {}))
    d.call(e, m) && o(a, m, e[m]);
  if (r)
    for (var m of r(e))
      l.call(e, m) && o(a, m, e[m]);
  return a;
}, i = (a, e) => f(a, s(e));
import n, { forwardRef as S } from "react";
import c from "../lib/SSRBase.mjs";
import g from "../defs/HandbagSimple.mjs";
const R = S((a, e) => /* @__PURE__ */ n.createElement(c, i(t({ ref: e }, a), { weights: g })));
R.displayName = "HandbagSimple";
export {
  R as HandbagSimple
};
