var f = Object.defineProperty, g = Object.defineProperties;
var i = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var n = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var e = (r, o, a) => o in r ? f(r, o, { enumerable: !0, configurable: !0, writable: !0, value: a }) : r[o] = a, m = (r, o) => {
  for (var a in o || (o = {}))
    n.call(o, a) && e(r, a, o[a]);
  if (t)
    for (var a of t(o))
      p.call(o, a) && e(r, a, o[a]);
  return r;
}, s = (r, o) => g(r, i(o));
import c, { forwardRef as I } from "react";
import d from "../lib/IconBase.mjs";
import l from "../defs/InstagramLogo.mjs";
const w = I((r, o) => /* @__PURE__ */ c.createElement(d, s(m({ ref: o }, r), { weights: l })));
w.displayName = "InstagramLogo";
export {
  w as InstagramLogo
};
