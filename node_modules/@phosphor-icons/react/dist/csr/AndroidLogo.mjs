var d = Object.defineProperty, f = Object.defineProperties;
var n = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var m = (r, o, e) => o in r ? d(r, o, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[o] = e, a = (r, o) => {
  for (var e in o || (o = {}))
    p.call(o, e) && m(r, e, o[e]);
  if (t)
    for (var e of t(o))
      s.call(o, e) && m(r, e, o[e]);
  return r;
}, i = (r, o) => f(r, n(o));
import c, { forwardRef as g } from "react";
import l from "../lib/IconBase.mjs";
import w from "../defs/AndroidLogo.mjs";
const A = g((r, o) => /* @__PURE__ */ c.createElement(l, i(a({ ref: o }, r), { weights: w })));
A.displayName = "AndroidLogo";
export {
  A as AndroidLogo
};
