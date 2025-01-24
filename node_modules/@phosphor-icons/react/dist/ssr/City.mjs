var f = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, y = Object.prototype.propertyIsEnumerable;
var m = (e, t, r) => t in e ? f(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, a = (e, t) => {
  for (var r in t || (t = {}))
    c.call(t, r) && m(e, r, t[r]);
  if (o)
    for (var r of o(t))
      y.call(t, r) && m(e, r, t[r]);
  return e;
}, i = (e, t) => p(e, s(t));
import R, { forwardRef as d } from "react";
import l from "../lib/SSRBase.mjs";
import n from "../defs/City.mjs";
const w = d((e, t) => /* @__PURE__ */ R.createElement(l, i(a({ ref: t }, e), { weights: n })));
w.displayName = "City";
export {
  w as City
};
