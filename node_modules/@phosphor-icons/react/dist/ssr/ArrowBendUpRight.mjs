var p = Object.defineProperty, f = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var R = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var m = (e, r, o) => r in e ? p(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o, a = (e, r) => {
  for (var o in r || (r = {}))
    R.call(r, o) && m(e, o, r[o]);
  if (t)
    for (var o of t(r))
      d.call(r, o) && m(e, o, r[o]);
  return e;
}, i = (e, r) => f(e, s(r));
import n, { forwardRef as w } from "react";
import c from "../lib/SSRBase.mjs";
import g from "../defs/ArrowBendUpRight.mjs";
const h = w((e, r) => /* @__PURE__ */ n.createElement(c, i(a({ ref: r }, e), { weights: g })));
h.displayName = "ArrowBendUpRight";
export {
  h as ArrowBendUpRight
};
