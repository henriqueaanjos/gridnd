var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var m = (e, o, r) => o in e ? f(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, a = (e, o) => {
  for (var r in o || (o = {}))
    s.call(o, r) && m(e, r, o[r]);
  if (t)
    for (var r of t(o))
      l.call(o, r) && m(e, r, o[r]);
  return e;
}, c = (e, o) => i(e, p(o));
import n, { forwardRef as d } from "react";
import k from "../lib/IconBase.mjs";
import w from "../defs/Clock.mjs";
const C = d((e, o) => /* @__PURE__ */ n.createElement(k, c(a({ ref: o }, e), { weights: w })));
C.displayName = "Clock";
export {
  C as Clock
};
