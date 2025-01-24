var s = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var e = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var a = (o, r, t) => r in o ? s(o, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[r] = t, m = (o, r) => {
  for (var t in r || (r = {}))
    l.call(r, t) && a(o, t, r[t]);
  if (e)
    for (var t of e(r))
      n.call(r, t) && a(o, t, r[t]);
  return o;
}, i = (o, r) => f(o, p(r));
import w, { forwardRef as c } from "react";
import R from "../lib/SSRBase.mjs";
import d from "../defs/ArrowsHorizontal.mjs";
const z = c((o, r) => /* @__PURE__ */ w.createElement(R, i(m({ ref: r }, o), { weights: d })));
z.displayName = "ArrowsHorizontal";
export {
  z as ArrowsHorizontal
};
