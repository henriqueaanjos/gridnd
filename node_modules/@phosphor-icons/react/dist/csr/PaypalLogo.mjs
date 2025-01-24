var f = Object.defineProperty, i = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var t = (a, o, e) => o in a ? f(a, o, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[o] = e, m = (a, o) => {
  for (var e in o || (o = {}))
    c.call(o, e) && t(a, e, o[e]);
  if (r)
    for (var e of r(o))
      l.call(o, e) && t(a, e, o[e]);
  return a;
}, p = (a, o) => i(a, s(o));
import g, { forwardRef as n } from "react";
import y from "../lib/IconBase.mjs";
import d from "../defs/PaypalLogo.mjs";
const w = n((a, o) => /* @__PURE__ */ g.createElement(y, p(m({ ref: o }, a), { weights: d })));
w.displayName = "PaypalLogo";
export {
  w as PaypalLogo
};
