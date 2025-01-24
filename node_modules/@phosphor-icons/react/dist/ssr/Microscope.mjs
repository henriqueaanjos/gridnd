var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var f = Object.prototype.hasOwnProperty, R = Object.prototype.propertyIsEnumerable;
var m = (e, o, r) => o in e ? i(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, a = (e, o) => {
  for (var r in o || (o = {}))
    f.call(o, r) && m(e, r, o[r]);
  if (t)
    for (var r of t(o))
      R.call(o, r) && m(e, r, o[r]);
  return e;
}, c = (e, o) => p(e, s(o));
import d, { forwardRef as l } from "react";
import n from "../lib/SSRBase.mjs";
import w from "../defs/Microscope.mjs";
const M = l((e, o) => /* @__PURE__ */ d.createElement(n, c(a({ ref: o }, e), { weights: w })));
M.displayName = "Microscope";
export {
  M as Microscope
};
