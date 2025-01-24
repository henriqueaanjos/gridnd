var f = Object.defineProperty, i = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var m = (r, o, e) => o in r ? f(r, o, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[o] = e, a = (r, o) => {
  for (var e in o || (o = {}))
    c.call(o, e) && m(r, e, o[e]);
  if (t)
    for (var e of t(o))
      d.call(o, e) && m(r, e, o[e]);
  return r;
}, p = (r, o) => i(r, s(o));
import l, { forwardRef as w } from "react";
import n from "../lib/IconBase.mjs";
import u from "../defs/CloudArrowUp.mjs";
const A = w((r, o) => /* @__PURE__ */ l.createElement(n, p(a({ ref: o }, r), { weights: u })));
A.displayName = "CloudArrowUp";
export {
  A as CloudArrowUp
};
