var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var s = Object.getOwnPropertySymbols;
var n = Object.prototype.hasOwnProperty, w = Object.prototype.propertyIsEnumerable;
var t = (o, r, e) => r in o ? f(o, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : o[r] = e, m = (o, r) => {
  for (var e in r || (r = {}))
    n.call(r, e) && t(o, e, r[e]);
  if (s)
    for (var e of s(r))
      w.call(r, e) && t(o, e, r[e]);
  return o;
}, a = (o, r) => i(o, p(r));
import C, { forwardRef as c } from "react";
import R from "../lib/SSRBase.mjs";
import d from "../defs/CrownCross.mjs";
const l = c((o, r) => /* @__PURE__ */ C.createElement(R, a(m({ ref: r }, o), { weights: d })));
l.displayName = "CrownCross";
export {
  l as CrownCross
};
