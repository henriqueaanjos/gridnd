var f = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var y = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var t = (r, e, m) => e in r ? f(r, e, { enumerable: !0, configurable: !0, writable: !0, value: m }) : r[e] = m, a = (r, e) => {
  for (var m in e || (e = {}))
    y.call(e, m) && t(r, m, e[m]);
  if (o)
    for (var m of o(e))
      l.call(e, m) && t(r, m, e[m]);
  return r;
}, i = (r, e) => p(r, s(e));
import n, { forwardRef as S } from "react";
import c from "../lib/SSRBase.mjs";
import g from "../defs/SmileyAngry.mjs";
const R = S((r, e) => /* @__PURE__ */ n.createElement(c, i(a({ ref: e }, r), { weights: g })));
R.displayName = "SmileyAngry";
export {
  R as SmileyAngry
};
