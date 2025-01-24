var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, R = Object.prototype.propertyIsEnumerable;
var s = (e, o, r) => o in e ? f(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, t = (e, o) => {
  for (var r in o || (o = {}))
    c.call(o, r) && s(e, r, o[r]);
  if (a)
    for (var r of a(o))
      R.call(o, r) && s(e, r, o[r]);
  return e;
}, m = (e, o) => i(e, p(o));
import d, { forwardRef as l } from "react";
import n from "../lib/SSRBase.mjs";
import w from "../defs/Lasso.mjs";
const L = l((e, o) => /* @__PURE__ */ d.createElement(n, m(t({ ref: o }, e), { weights: w })));
L.displayName = "Lasso";
export {
  L as Lasso
};
