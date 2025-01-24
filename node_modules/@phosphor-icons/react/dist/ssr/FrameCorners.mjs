var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var m = Object.getOwnPropertySymbols;
var n = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var a = (e, r, o) => r in e ? f(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o, t = (e, r) => {
  for (var o in r || (r = {}))
    n.call(r, o) && a(e, o, r[o]);
  if (m)
    for (var o of m(r))
      c.call(r, o) && a(e, o, r[o]);
  return e;
}, s = (e, r) => i(e, p(r));
import R, { forwardRef as d } from "react";
import l from "../lib/SSRBase.mjs";
import w from "../defs/FrameCorners.mjs";
const C = d((e, r) => /* @__PURE__ */ R.createElement(l, s(t({ ref: r }, e), { weights: w })));
C.displayName = "FrameCorners";
export {
  C as FrameCorners
};
