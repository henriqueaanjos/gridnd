var t = Object.defineProperty, p = Object.defineProperties;
var l = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var f = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var a = (m, e, r) => e in m ? t(m, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : m[e] = r, i = (m, e) => {
  for (var r in e || (e = {}))
    f.call(e, r) && a(m, r, e[r]);
  if (o)
    for (var r of o(e))
      d.call(e, r) && a(m, r, e[r]);
  return m;
}, s = (m, e) => p(m, l(e));
import u, { forwardRef as S } from "react";
import c from "../lib/SSRBase.mjs";
import g from "../defs/HourglassSimpleMedium.mjs";
const R = S((m, e) => /* @__PURE__ */ u.createElement(c, s(i({ ref: e }, m), { weights: g })));
R.displayName = "HourglassSimpleMedium";
export {
  R as HourglassSimpleMedium
};
