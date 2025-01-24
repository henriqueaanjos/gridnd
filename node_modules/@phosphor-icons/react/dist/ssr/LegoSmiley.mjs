var f = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, S = Object.prototype.propertyIsEnumerable;
var t = (o, e, m) => e in o ? f(o, e, { enumerable: !0, configurable: !0, writable: !0, value: m }) : o[e] = m, a = (o, e) => {
  for (var m in e || (e = {}))
    l.call(e, m) && t(o, m, e[m]);
  if (r)
    for (var m of r(e))
      S.call(e, m) && t(o, m, e[m]);
  return o;
}, i = (o, e) => p(o, s(e));
import c, { forwardRef as g } from "react";
import y from "../lib/SSRBase.mjs";
import R from "../defs/LegoSmiley.mjs";
const d = g((o, e) => /* @__PURE__ */ c.createElement(y, i(a({ ref: e }, o), { weights: R })));
d.displayName = "LegoSmiley";
export {
  d as LegoSmiley
};
