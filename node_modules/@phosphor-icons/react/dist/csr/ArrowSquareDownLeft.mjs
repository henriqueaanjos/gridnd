var w = Object.defineProperty, i = Object.defineProperties;
var n = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var a = (e, r, o) => r in e ? w(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o, m = (e, r) => {
  for (var o in r || (r = {}))
    p.call(r, o) && a(e, o, r[o]);
  if (t)
    for (var o of t(r))
      s.call(r, o) && a(e, o, r[o]);
  return e;
}, f = (e, r) => i(e, n(r));
import c, { forwardRef as d } from "react";
import l from "../lib/IconBase.mjs";
import q from "../defs/ArrowSquareDownLeft.mjs";
const u = d((e, r) => /* @__PURE__ */ c.createElement(l, f(m({ ref: r }, e), { weights: q })));
u.displayName = "ArrowSquareDownLeft";
export {
  u as ArrowSquareDownLeft
};
