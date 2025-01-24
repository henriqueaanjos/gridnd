var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var e = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var a = (o, r, t) => r in o ? f(o, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[r] = t, m = (o, r) => {
  for (var t in r || (r = {}))
    s.call(r, t) && a(o, t, r[t]);
  if (e)
    for (var t of e(r))
      n.call(r, t) && a(o, t, r[t]);
  return o;
}, c = (o, r) => i(o, p(r));
import d, { forwardRef as l } from "react";
import w from "../lib/IconBase.mjs";
import I from "../defs/Tractor.mjs";
const R = l((o, r) => /* @__PURE__ */ d.createElement(w, c(m({ ref: r }, o), { weights: I })));
R.displayName = "Tractor";
export {
  R as Tractor
};
