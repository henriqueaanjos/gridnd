var s = Object.defineProperty, c = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var m = (e, r, o) => r in e ? s(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o, a = (e, r) => {
  for (var o in r || (r = {}))
    p.call(r, o) && m(e, o, r[o]);
  if (t)
    for (var o of t(r))
      l.call(r, o) && m(e, o, r[o]);
  return e;
}, i = (e, r) => c(e, f(r));
import n, { forwardRef as d } from "react";
import u from "../lib/IconBase.mjs";
import w from "../defs/CirclesFour.mjs";
const C = d((e, r) => /* @__PURE__ */ n.createElement(u, i(a({ ref: r }, e), { weights: w })));
C.displayName = "CirclesFour";
export {
  C as CirclesFour
};
