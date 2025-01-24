var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var t = (o, e, r) => e in o ? f(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, m = (o, e) => {
  for (var r in e || (e = {}))
    s.call(e, r) && t(o, r, e[r]);
  if (a)
    for (var r of a(e))
      n.call(e, r) && t(o, r, e[r]);
  return o;
}, c = (o, e) => i(o, p(e));
import g, { forwardRef as h } from "react";
import B from "../lib/SSRBase.mjs";
import R from "../defs/BehanceLogo.mjs";
const d = h((o, e) => /* @__PURE__ */ g.createElement(B, c(m({ ref: e }, o), { weights: R })));
d.displayName = "BehanceLogo";
export {
  d as BehanceLogo
};
