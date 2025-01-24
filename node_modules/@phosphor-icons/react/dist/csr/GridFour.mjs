var f = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var m = (o, r, e) => r in o ? f(o, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : o[r] = e, a = (o, r) => {
  for (var e in r || (r = {}))
    c.call(r, e) && m(o, e, r[e]);
  if (t)
    for (var e of t(r))
      d.call(r, e) && m(o, e, r[e]);
  return o;
}, i = (o, r) => p(o, s(r));
import n, { forwardRef as l } from "react";
import u from "../lib/IconBase.mjs";
import w from "../defs/GridFour.mjs";
const F = l((o, r) => /* @__PURE__ */ n.createElement(u, i(a({ ref: r }, o), { weights: w })));
F.displayName = "GridFour";
export {
  F as GridFour
};
