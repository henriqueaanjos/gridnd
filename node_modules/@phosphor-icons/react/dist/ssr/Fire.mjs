var f = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, R = Object.prototype.propertyIsEnumerable;
var m = (r, e, o) => e in r ? f(r, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[e] = o, a = (r, e) => {
  for (var o in e || (e = {}))
    c.call(e, o) && m(r, o, e[o]);
  if (t)
    for (var o of t(e))
      R.call(e, o) && m(r, o, e[o]);
  return r;
}, i = (r, e) => p(r, s(e));
import d, { forwardRef as l } from "react";
import n from "../lib/SSRBase.mjs";
import w from "../defs/Fire.mjs";
const F = l((r, e) => /* @__PURE__ */ d.createElement(n, i(a({ ref: e }, r), { weights: w })));
F.displayName = "Fire";
export {
  F as Fire
};
