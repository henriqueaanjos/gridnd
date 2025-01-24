var s = Object.defineProperty, f = Object.defineProperties;
var i = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var d = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var t = (o, e, r) => e in o ? s(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, m = (o, e) => {
  for (var r in e || (e = {}))
    d.call(e, r) && t(o, r, e[r]);
  if (a)
    for (var r of a(e))
      n.call(e, r) && t(o, r, e[r]);
  return o;
}, p = (o, e) => f(o, i(e));
import c, { forwardRef as h } from "react";
import R from "../lib/SSRBase.mjs";
import l from "../defs/Headphones.mjs";
const w = h((o, e) => /* @__PURE__ */ c.createElement(R, p(m({ ref: e }, o), { weights: l })));
w.displayName = "Headphones";
export {
  w as Headphones
};
