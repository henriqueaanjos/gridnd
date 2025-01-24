var p = Object.defineProperty, f = Object.defineProperties;
var n = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var m = (e, r, o) => r in e ? p(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o, a = (e, r) => {
  for (var o in r || (r = {}))
    s.call(r, o) && m(e, o, r[o]);
  if (t)
    for (var o of t(r))
      c.call(r, o) && m(e, o, r[o]);
  return e;
}, i = (e, r) => f(e, n(r));
import d, { forwardRef as w } from "react";
import R from "../lib/IconBase.mjs";
import g from "../defs/ArrowBendUpRight.mjs";
const h = w((e, r) => /* @__PURE__ */ d.createElement(R, i(a({ ref: r }, e), { weights: g })));
h.displayName = "ArrowBendUpRight";
export {
  h as ArrowBendUpRight
};
