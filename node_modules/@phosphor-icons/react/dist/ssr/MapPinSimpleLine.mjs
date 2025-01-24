var t = Object.defineProperty, n = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var a = (i, e, m) => e in i ? t(i, e, { enumerable: !0, configurable: !0, writable: !0, value: m }) : i[e] = m, o = (i, e) => {
  for (var m in e || (e = {}))
    s.call(e, m) && a(i, m, e[m]);
  if (r)
    for (var m of r(e))
      l.call(e, m) && a(i, m, e[m]);
  return i;
}, p = (i, e) => n(i, f(e));
import S, { forwardRef as c } from "react";
import R from "../lib/SSRBase.mjs";
import d from "../defs/MapPinSimpleLine.mjs";
const w = c((i, e) => /* @__PURE__ */ S.createElement(R, p(o({ ref: e }, i), { weights: d })));
w.displayName = "MapPinSimpleLine";
export {
  w as MapPinSimpleLine
};
