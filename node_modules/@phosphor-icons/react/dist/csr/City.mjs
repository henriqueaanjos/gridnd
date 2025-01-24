var f = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var m = (e, t, o) => t in e ? f(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[t] = o, a = (e, t) => {
  for (var o in t || (t = {}))
    c.call(t, o) && m(e, o, t[o]);
  if (r)
    for (var o of r(t))
      n.call(t, o) && m(e, o, t[o]);
  return e;
}, i = (e, t) => p(e, s(t));
import y, { forwardRef as d } from "react";
import l from "../lib/IconBase.mjs";
import w from "../defs/City.mjs";
const C = d((e, t) => /* @__PURE__ */ y.createElement(l, i(a({ ref: t }, e), { weights: w })));
C.displayName = "City";
export {
  C as City
};
