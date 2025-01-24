var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var f = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var c = (e, o, r) => o in e ? i(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, m = (e, o) => {
  for (var r in o || (o = {}))
    f.call(o, r) && c(e, r, o[r]);
  if (t)
    for (var r of t(o))
      n.call(o, r) && c(e, r, o[r]);
  return e;
}, a = (e, o) => p(e, s(o));
import d, { forwardRef as l } from "react";
import w from "../lib/IconBase.mjs";
import I from "../defs/Microscope.mjs";
const M = l((e, o) => /* @__PURE__ */ d.createElement(w, a(m({ ref: o }, e), { weights: I })));
M.displayName = "Microscope";
export {
  M as Microscope
};
