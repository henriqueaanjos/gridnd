var p = Object.defineProperty, l = Object.defineProperties;
var n = Object.getOwnPropertyDescriptors;
var i = Object.getOwnPropertySymbols;
var f = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var t = (e, o, r) => o in e ? p(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, m = (e, o) => {
  for (var r in o || (o = {}))
    f.call(o, r) && t(e, r, o[r]);
  if (i)
    for (var r of i(o))
      s.call(o, r) && t(e, r, o[r]);
  return e;
}, a = (e, o) => l(e, n(o));
import S, { forwardRef as c } from "react";
import R from "../lib/SSRBase.mjs";
import d from "../defs/LinkSimpleHorizontal.mjs";
const k = c((e, o) => /* @__PURE__ */ S.createElement(R, a(m({ ref: o }, e), { weights: d })));
k.displayName = "LinkSimpleHorizontal";
export {
  k as LinkSimpleHorizontal
};
