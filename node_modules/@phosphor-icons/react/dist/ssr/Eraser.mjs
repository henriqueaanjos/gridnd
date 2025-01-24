var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, E = Object.prototype.propertyIsEnumerable;
var t = (e, r, a) => r in e ? f(e, r, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[r] = a, m = (e, r) => {
  for (var a in r || (r = {}))
    c.call(r, a) && t(e, a, r[a]);
  if (o)
    for (var a of o(r))
      E.call(r, a) && t(e, a, r[a]);
  return e;
}, s = (e, r) => i(e, p(r));
import R, { forwardRef as d } from "react";
import l from "../lib/SSRBase.mjs";
import n from "../defs/Eraser.mjs";
const w = d((e, r) => /* @__PURE__ */ R.createElement(l, s(m({ ref: r }, e), { weights: n })));
w.displayName = "Eraser";
export {
  w as Eraser
};
