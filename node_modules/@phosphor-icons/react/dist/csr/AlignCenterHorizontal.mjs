var m = Object.defineProperty, l = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var a = (o, e, r) => e in o ? m(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, i = (o, e) => {
  for (var r in e || (e = {}))
    p.call(e, r) && a(o, r, e[r]);
  if (t)
    for (var r of t(e))
      s.call(e, r) && a(o, r, e[r]);
  return o;
}, n = (o, e) => l(o, f(e));
import c, { forwardRef as g } from "react";
import d from "../lib/IconBase.mjs";
import w from "../defs/AlignCenterHorizontal.mjs";
const z = g((o, e) => /* @__PURE__ */ c.createElement(d, n(i({ ref: e }, o), { weights: w })));
z.displayName = "AlignCenterHorizontal";
export {
  z as AlignCenterHorizontal
};
