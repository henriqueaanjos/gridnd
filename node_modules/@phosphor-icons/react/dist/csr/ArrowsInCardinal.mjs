var n = Object.defineProperty, s = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var e = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var t = (o, r, a) => r in o ? n(o, r, { enumerable: !0, configurable: !0, writable: !0, value: a }) : o[r] = a, m = (o, r) => {
  for (var a in r || (r = {}))
    p.call(r, a) && t(o, a, r[a]);
  if (e)
    for (var a of e(r))
      c.call(r, a) && t(o, a, r[a]);
  return o;
}, i = (o, r) => s(o, f(r));
import d, { forwardRef as l } from "react";
import w from "../lib/IconBase.mjs";
import I from "../defs/ArrowsInCardinal.mjs";
const A = l((o, r) => /* @__PURE__ */ d.createElement(w, i(m({ ref: r }, o), { weights: I })));
A.displayName = "ArrowsInCardinal";
export {
  A as ArrowsInCardinal
};
