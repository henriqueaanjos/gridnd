var n = Object.defineProperty, f = Object.defineProperties;
var i = Object.getOwnPropertyDescriptors;
var p = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var t = (o, e, r) => e in o ? n(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, m = (o, e) => {
  for (var r in e || (e = {}))
    s.call(e, r) && t(o, r, e[r]);
  if (p)
    for (var r of p(e))
      l.call(e, r) && t(o, r, e[r]);
  return o;
}, a = (o, e) => f(o, i(e));
import c, { forwardRef as E } from "react";
import R from "../lib/SSRBase.mjs";
import d from "../defs/EnvelopeOpen.mjs";
const v = E((o, e) => /* @__PURE__ */ c.createElement(R, a(m({ ref: e }, o), { weights: d })));
v.displayName = "EnvelopeOpen";
export {
  v as EnvelopeOpen
};
