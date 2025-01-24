var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var d = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var t = (r, e, a) => e in r ? i(r, e, { enumerable: !0, configurable: !0, writable: !0, value: a }) : r[e] = a, m = (r, e) => {
  for (var a in e || (e = {}))
    d.call(e, a) && t(r, a, e[a]);
  if (o)
    for (var a of o(e))
      l.call(e, a) && t(r, a, e[a]);
  return r;
}, f = (r, e) => p(r, s(e));
import c, { forwardRef as R } from "react";
import n from "../lib/SSRBase.mjs";
import w from "../defs/Medal.mjs";
const M = R((r, e) => /* @__PURE__ */ c.createElement(n, f(m({ ref: e }, r), { weights: w })));
M.displayName = "Medal";
export {
  M as Medal
};
