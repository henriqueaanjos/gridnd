var i = Object.defineProperty, w = Object.defineProperties;
var c = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var m = (e, r, o) => r in e ? i(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o, a = (e, r) => {
  for (var o in r || (r = {}))
    p.call(r, o) && m(e, o, r[o]);
  if (t)
    for (var o of t(r))
      s.call(r, o) && m(e, o, r[o]);
  return e;
}, f = (e, r) => w(e, c(r));
import l, { forwardRef as n } from "react";
import R from "../lib/SSRBase.mjs";
import d from "../defs/ArrowCircleDownLeft.mjs";
const A = n((e, r) => /* @__PURE__ */ l.createElement(R, f(a({ ref: r }, e), { weights: d })));
A.displayName = "ArrowCircleDownLeft";
export {
  A as ArrowCircleDownLeft
};
