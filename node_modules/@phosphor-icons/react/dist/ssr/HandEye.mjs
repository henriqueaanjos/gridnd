var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var d = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var t = (r, e, a) => e in r ? i(r, e, { enumerable: !0, configurable: !0, writable: !0, value: a }) : r[e] = a, m = (r, e) => {
  for (var a in e || (e = {}))
    d.call(e, a) && t(r, a, e[a]);
  if (o)
    for (var a of o(e))
      n.call(e, a) && t(r, a, e[a]);
  return r;
}, f = (r, e) => p(r, s(e));
import c, { forwardRef as y } from "react";
import E from "../lib/SSRBase.mjs";
import R from "../defs/HandEye.mjs";
const l = y((r, e) => /* @__PURE__ */ c.createElement(E, f(m({ ref: e }, r), { weights: R })));
l.displayName = "HandEye";
export {
  l as HandEye
};
