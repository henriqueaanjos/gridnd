var m = Object.defineProperty, c = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, h = Object.prototype.propertyIsEnumerable;
var f = (r, e, o) => e in r ? m(r, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[e] = o, i = (r, e) => {
  for (var o in e || (e = {}))
    s.call(e, o) && f(r, o, e[o]);
  if (a)
    for (var o of a(e))
      h.call(e, o) && f(r, o, e[o]);
  return r;
}, t = (r, e) => c(r, p(e));
import n, { forwardRef as d } from "react";
import l from "../lib/IconBase.mjs";
import w from "../defs/OfficeChair.mjs";
const C = d((r, e) => /* @__PURE__ */ n.createElement(l, t(i({ ref: e }, r), { weights: w })));
C.displayName = "OfficeChair";
export {
  C as OfficeChair
};
