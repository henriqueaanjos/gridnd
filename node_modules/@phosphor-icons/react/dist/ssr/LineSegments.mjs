var s = Object.defineProperty, n = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, S = Object.prototype.propertyIsEnumerable;
var o = (t, e, m) => e in t ? s(t, e, { enumerable: !0, configurable: !0, writable: !0, value: m }) : t[e] = m, a = (t, e) => {
  for (var m in e || (e = {}))
    p.call(e, m) && o(t, m, e[m]);
  if (r)
    for (var m of r(e))
      S.call(e, m) && o(t, m, e[m]);
  return t;
}, i = (t, e) => n(t, f(e));
import c, { forwardRef as g } from "react";
import R from "../lib/SSRBase.mjs";
import d from "../defs/LineSegments.mjs";
const l = g((t, e) => /* @__PURE__ */ c.createElement(R, i(a({ ref: e }, t), { weights: d })));
l.displayName = "LineSegments";
export {
  l as LineSegments
};
