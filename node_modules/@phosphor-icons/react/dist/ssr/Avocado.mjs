var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var t = (e, o, r) => o in e ? f(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, m = (e, o) => {
  for (var r in o || (o = {}))
    s.call(o, r) && t(e, r, o[r]);
  if (a)
    for (var r of a(o))
      d.call(o, r) && t(e, r, o[r]);
  return e;
}, c = (e, o) => i(e, p(o));
import R, { forwardRef as l } from "react";
import n from "../lib/SSRBase.mjs";
import v from "../defs/Avocado.mjs";
const w = l((e, o) => /* @__PURE__ */ R.createElement(n, c(m({ ref: o }, e), { weights: v })));
w.displayName = "Avocado";
export {
  w as Avocado
};
