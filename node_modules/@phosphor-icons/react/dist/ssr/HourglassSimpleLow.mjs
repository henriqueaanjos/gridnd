var i = Object.defineProperty, p = Object.defineProperties;
var l = Object.getOwnPropertyDescriptors;
var m = Object.getOwnPropertySymbols;
var f = Object.prototype.hasOwnProperty, w = Object.prototype.propertyIsEnumerable;
var a = (e, o, r) => o in e ? i(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, s = (e, o) => {
  for (var r in o || (o = {}))
    f.call(o, r) && a(e, r, o[r]);
  if (m)
    for (var r of m(o))
      w.call(o, r) && a(e, r, o[r]);
  return e;
}, t = (e, o) => p(e, l(o));
import S, { forwardRef as c } from "react";
import g from "../lib/SSRBase.mjs";
import R from "../defs/HourglassSimpleLow.mjs";
const d = c((e, o) => /* @__PURE__ */ S.createElement(g, t(s({ ref: o }, e), { weights: R })));
d.displayName = "HourglassSimpleLow";
export {
  d as HourglassSimpleLow
};
