var s = Object.defineProperty, f = Object.defineProperties;
var i = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var m = (r, e, t) => e in r ? s(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t, a = (r, e) => {
  for (var t in e || (e = {}))
    p.call(e, t) && m(r, t, e[t]);
  if (o)
    for (var t of o(e))
      c.call(e, t) && m(r, t, e[t]);
  return r;
}, n = (r, e) => f(r, i(e));
import d, { forwardRef as I } from "react";
import x from "../lib/IconBase.mjs";
import l from "../defs/GenderIntersex.mjs";
const w = I((r, e) => /* @__PURE__ */ d.createElement(x, n(a({ ref: e }, r), { weights: l })));
w.displayName = "GenderIntersex";
export {
  w as GenderIntersex
};
