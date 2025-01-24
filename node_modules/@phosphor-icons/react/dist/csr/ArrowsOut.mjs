var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var e = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, w = Object.prototype.propertyIsEnumerable;
var m = (o, r, t) => r in o ? f(o, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[r] = t, a = (o, r) => {
  for (var t in r || (r = {}))
    c.call(r, t) && m(o, t, r[t]);
  if (e)
    for (var t of e(r))
      w.call(r, t) && m(o, t, r[t]);
  return o;
}, s = (o, r) => i(o, p(r));
import n, { forwardRef as d } from "react";
import l from "../lib/IconBase.mjs";
import u from "../defs/ArrowsOut.mjs";
const A = d((o, r) => /* @__PURE__ */ n.createElement(l, s(a({ ref: r }, o), { weights: u })));
A.displayName = "ArrowsOut";
export {
  A as ArrowsOut
};
