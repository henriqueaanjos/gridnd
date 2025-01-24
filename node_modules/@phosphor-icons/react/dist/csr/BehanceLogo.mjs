var f = Object.defineProperty, i = Object.defineProperties;
var n = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var t = (o, e, r) => e in o ? f(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, m = (o, e) => {
  for (var r in e || (e = {}))
    p.call(e, r) && t(o, r, e[r]);
  if (a)
    for (var r of a(e))
      s.call(e, r) && t(o, r, e[r]);
  return o;
}, c = (o, e) => i(o, n(e));
import g, { forwardRef as h } from "react";
import B from "../lib/IconBase.mjs";
import d from "../defs/BehanceLogo.mjs";
const l = h((o, e) => /* @__PURE__ */ g.createElement(B, c(m({ ref: e }, o), { weights: d })));
l.displayName = "BehanceLogo";
export {
  l as BehanceLogo
};
