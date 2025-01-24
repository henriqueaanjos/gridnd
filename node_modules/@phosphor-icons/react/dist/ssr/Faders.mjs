var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var d = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var t = (r, e, a) => e in r ? f(r, e, { enumerable: !0, configurable: !0, writable: !0, value: a }) : r[e] = a, m = (r, e) => {
  for (var a in e || (e = {}))
    d.call(e, a) && t(r, a, e[a]);
  if (o)
    for (var a of o(e))
      c.call(e, a) && t(r, a, e[a]);
  return r;
}, s = (r, e) => i(r, p(e));
import R, { forwardRef as l } from "react";
import n from "../lib/SSRBase.mjs";
import w from "../defs/Faders.mjs";
const F = l((r, e) => /* @__PURE__ */ R.createElement(n, s(m({ ref: e }, r), { weights: w })));
F.displayName = "Faders";
export {
  F as Faders
};
