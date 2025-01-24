var w = Object.defineProperty, f = Object.defineProperties;
var i = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var t = (o, r, e) => r in o ? w(o, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : o[r] = e, m = (o, r) => {
  for (var e in r || (r = {}))
    p.call(r, e) && t(o, e, r[e]);
  if (a)
    for (var e of a(r))
      s.call(r, e) && t(o, e, r[e]);
  return o;
}, n = (o, r) => f(o, i(r));
import d, { forwardRef as c } from "react";
import R from "../lib/SSRBase.mjs";
import l from "../defs/HandArrowDown.mjs";
const A = c((o, r) => /* @__PURE__ */ d.createElement(R, n(m({ ref: r }, o), { weights: l })));
A.displayName = "HandArrowDown";
export {
  A as HandArrowDown
};
