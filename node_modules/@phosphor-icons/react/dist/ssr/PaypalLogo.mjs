var f = Object.defineProperty, i = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var t = (a, o, e) => o in a ? f(a, o, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[o] = e, m = (a, o) => {
  for (var e in o || (o = {}))
    l.call(o, e) && t(a, e, o[e]);
  if (r)
    for (var e of r(o))
      c.call(o, e) && t(a, e, o[e]);
  return a;
}, p = (a, o) => i(a, s(o));
import g, { forwardRef as y } from "react";
import R from "../lib/SSRBase.mjs";
import d from "../defs/PaypalLogo.mjs";
const n = y((a, o) => /* @__PURE__ */ g.createElement(R, p(m({ ref: o }, a), { weights: d })));
n.displayName = "PaypalLogo";
export {
  n as PaypalLogo
};
