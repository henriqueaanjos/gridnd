var n = Object.defineProperty, c = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var i = (e, r, o) => r in e ? n(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o, t = (e, r) => {
  for (var o in r || (r = {}))
    p.call(r, o) && i(e, o, r[o]);
  if (a)
    for (var o of a(r))
      s.call(r, o) && i(e, o, r[o]);
  return e;
}, m = (e, r) => c(e, f(r));
import l, { forwardRef as g } from "react";
import d from "../lib/IconBase.mjs";
import w from "../defs/WarningCircle.mjs";
const C = g((e, r) => /* @__PURE__ */ l.createElement(d, m(t({ ref: r }, e), { weights: w })));
C.displayName = "WarningCircle";
export {
  C as WarningCircle
};
