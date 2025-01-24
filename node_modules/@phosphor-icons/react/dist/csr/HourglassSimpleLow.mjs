var i = Object.defineProperty, p = Object.defineProperties;
var l = Object.getOwnPropertyDescriptors;
var m = Object.getOwnPropertySymbols;
var f = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var a = (e, o, r) => o in e ? i(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, s = (e, o) => {
  for (var r in o || (o = {}))
    f.call(o, r) && a(e, r, o[r]);
  if (m)
    for (var r of m(o))
      c.call(o, r) && a(e, r, o[r]);
  return e;
}, t = (e, o) => p(e, l(o));
import w, { forwardRef as g } from "react";
import n from "../lib/IconBase.mjs";
import d from "../defs/HourglassSimpleLow.mjs";
const u = g((e, o) => /* @__PURE__ */ w.createElement(n, t(s({ ref: o }, e), { weights: d })));
u.displayName = "HourglassSimpleLow";
export {
  u as HourglassSimpleLow
};
