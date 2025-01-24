var p = Object.defineProperty, l = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var e = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var a = (t, o, r) => o in t ? p(t, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[o] = r, i = (t, o) => {
  for (var r in o || (o = {}))
    s.call(o, r) && a(t, r, o[r]);
  if (e)
    for (var r of e(o))
      n.call(o, r) && a(t, r, o[r]);
  return t;
}, m = (t, o) => l(t, f(o));
import S, { forwardRef as c } from "react";
import R from "../lib/SSRBase.mjs";
import d from "../defs/SplitHorizontal.mjs";
const w = c((t, o) => /* @__PURE__ */ S.createElement(R, m(i({ ref: o }, t), { weights: d })));
w.displayName = "SplitHorizontal";
export {
  w as SplitHorizontal
};
