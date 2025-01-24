var c = Object.defineProperty, f = Object.defineProperties;
var i = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, R = Object.prototype.propertyIsEnumerable;
var t = (a, e, r) => e in a ? c(a, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : a[e] = r, m = (a, e) => {
  for (var r in e || (e = {}))
    p.call(e, r) && t(a, r, e[r]);
  if (o)
    for (var r of o(e))
      R.call(e, r) && t(a, r, e[r]);
  return a;
}, s = (a, e) => f(a, i(e));
import d, { forwardRef as k } from "react";
import l from "../lib/SSRBase.mjs";
import n from "../defs/FaceMask.mjs";
const w = k((a, e) => /* @__PURE__ */ d.createElement(l, s(m({ ref: e }, a), { weights: n })));
w.displayName = "FaceMask";
export {
  w as FaceMask
};
