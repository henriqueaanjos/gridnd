var t = Object.defineProperty, p = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var m = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var a = (e, r, o) => r in e ? t(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o, i = (e, r) => {
  for (var o in r || (r = {}))
    c.call(r, o) && a(e, o, r[o]);
  if (m)
    for (var o of m(r))
      l.call(r, o) && a(e, o, r[o]);
  return e;
}, s = (e, r) => p(e, f(r));
import h, { forwardRef as n } from "react";
import d from "../lib/IconBase.mjs";
import w from "../defs/CrosshairSimple.mjs";
const C = n((e, r) => /* @__PURE__ */ h.createElement(d, s(i({ ref: r }, e), { weights: w })));
C.displayName = "CrosshairSimple";
export {
  C as CrosshairSimple
};
