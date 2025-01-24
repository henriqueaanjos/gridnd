var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var m = (e, o, r) => o in e ? f(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, a = (e, o) => {
  for (var r in o || (o = {}))
    s.call(o, r) && m(e, r, o[r]);
  if (t)
    for (var r of t(o))
      n.call(o, r) && m(e, r, o[r]);
  return e;
}, c = (e, o) => i(e, p(o));
import d, { forwardRef as l } from "react";
import w from "../lib/IconBase.mjs";
import I from "../defs/Scooter.mjs";
const R = l((e, o) => /* @__PURE__ */ d.createElement(w, c(a({ ref: o }, e), { weights: I })));
R.displayName = "Scooter";
export {
  R as Scooter
};
