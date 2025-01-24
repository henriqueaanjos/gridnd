var n = Object.defineProperty, l = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var a = (r, e, o) => e in r ? n(r, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[e] = o, i = (r, e) => {
  for (var o in e || (e = {}))
    p.call(e, o) && a(r, o, e[o]);
  if (t)
    for (var o of t(e))
      s.call(e, o) && a(r, o, e[o]);
  return r;
}, m = (r, e) => l(r, f(e));
import c, { forwardRef as g } from "react";
import R from "../lib/SSRBase.mjs";
import d from "../defs/AlignCenterHorizontal.mjs";
const w = g((r, e) => /* @__PURE__ */ c.createElement(R, m(i({ ref: e }, r), { weights: d })));
w.displayName = "AlignCenterHorizontal";
export {
  w as AlignCenterHorizontal
};
