var f = Object.defineProperty, i = Object.defineProperties;
var n = Object.getOwnPropertyDescriptors;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var a = (e, r, o) => r in e ? f(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o, t = (e, r) => {
  for (var o in r || (r = {}))
    p.call(r, o) && a(e, o, r[o]);
  if (m)
    for (var o of m(r))
      c.call(r, o) && a(e, o, r[o]);
  return e;
}, s = (e, r) => i(e, n(r));
import d, { forwardRef as l } from "react";
import w from "../lib/IconBase.mjs";
import C from "../defs/FrameCorners.mjs";
const F = l((e, r) => /* @__PURE__ */ d.createElement(w, s(t({ ref: r }, e), { weights: C })));
F.displayName = "FrameCorners";
export {
  F as FrameCorners
};
