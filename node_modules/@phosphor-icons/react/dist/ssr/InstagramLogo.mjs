var f = Object.defineProperty, g = Object.defineProperties;
var i = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var e = (r, o, a) => o in r ? f(r, o, { enumerable: !0, configurable: !0, writable: !0, value: a }) : r[o] = a, m = (r, o) => {
  for (var a in o || (o = {}))
    p.call(o, a) && e(r, a, o[a]);
  if (t)
    for (var a of t(o))
      n.call(o, a) && e(r, a, o[a]);
  return r;
}, s = (r, o) => g(r, i(o));
import c, { forwardRef as I } from "react";
import R from "../lib/SSRBase.mjs";
import d from "../defs/InstagramLogo.mjs";
const l = I((r, o) => /* @__PURE__ */ c.createElement(R, s(m({ ref: o }, r), { weights: d })));
l.displayName = "InstagramLogo";
export {
  l as InstagramLogo
};
