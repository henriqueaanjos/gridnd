var c = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var t = (e, r, o) => r in e ? c(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o, m = (e, r) => {
  for (var o in r || (r = {}))
    s.call(r, o) && t(e, o, r[o]);
  if (a)
    for (var o of a(r))
      l.call(r, o) && t(e, o, r[o]);
  return e;
}, i = (e, r) => f(e, p(r));
import n, { forwardRef as d } from "react";
import k from "../lib/IconBase.mjs";
import w from "../defs/MarkerCircle.mjs";
const C = d((e, r) => /* @__PURE__ */ n.createElement(k, i(m({ ref: r }, e), { weights: w })));
C.displayName = "MarkerCircle";
export {
  C as MarkerCircle
};
