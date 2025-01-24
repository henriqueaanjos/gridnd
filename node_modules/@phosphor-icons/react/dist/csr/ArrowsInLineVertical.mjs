var n = Object.defineProperty, s = Object.defineProperties;
var c = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var f = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var a = (e, r, o) => r in e ? n(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o, i = (e, r) => {
  for (var o in r || (r = {}))
    f.call(r, o) && a(e, o, r[o]);
  if (t)
    for (var o of t(r))
      p.call(r, o) && a(e, o, r[o]);
  return e;
}, m = (e, r) => s(e, c(r));
import l, { forwardRef as w } from "react";
import I from "../lib/IconBase.mjs";
import d from "../defs/ArrowsInLineVertical.mjs";
const A = w((e, r) => /* @__PURE__ */ l.createElement(I, m(i({ ref: r }, e), { weights: d })));
A.displayName = "ArrowsInLineVertical";
export {
  A as ArrowsInLineVertical
};
