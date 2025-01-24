var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var d = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var t = (o, r, e) => r in o ? i(o, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : o[r] = e, m = (o, r) => {
  for (var e in r || (r = {}))
    d.call(r, e) && t(o, e, r[e]);
  if (a)
    for (var e of a(r))
      l.call(r, e) && t(o, e, r[e]);
  return o;
}, f = (o, r) => p(o, s(r));
import c, { forwardRef as R } from "react";
import n from "../lib/SSRBase.mjs";
import w from "../defs/MapTrifold.mjs";
const M = R((o, r) => /* @__PURE__ */ c.createElement(n, f(m({ ref: r }, o), { weights: w })));
M.displayName = "MapTrifold";
export {
  M as MapTrifold
};
