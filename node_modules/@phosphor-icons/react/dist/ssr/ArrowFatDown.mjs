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
}, w = (o, r) => i(o, p(r));
import c, { forwardRef as R } from "react";
import d from "../lib/SSRBase.mjs";
import l from "../defs/ArrowFatDown.mjs";
const A = R((o, r) => /* @__PURE__ */ c.createElement(d, w(m({ ref: r }, o), { weights: l })));
A.displayName = "ArrowFatDown";
export {
  A as ArrowFatDown
};
