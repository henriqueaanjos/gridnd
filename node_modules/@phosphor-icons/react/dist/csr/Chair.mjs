var f = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, h = Object.prototype.propertyIsEnumerable;
var t = (e, r, o) => r in e ? f(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o, m = (e, r) => {
  for (var o in r || (r = {}))
    c.call(r, o) && t(e, o, r[o]);
  if (a)
    for (var o of a(r))
      h.call(r, o) && t(e, o, r[o]);
  return e;
}, i = (e, r) => p(e, s(r));
import n, { forwardRef as d } from "react";
import l from "../lib/IconBase.mjs";
import w from "../defs/Chair.mjs";
const C = d((e, r) => /* @__PURE__ */ n.createElement(l, i(m({ ref: r }, e), { weights: w })));
C.displayName = "Chair";
export {
  C as Chair
};
