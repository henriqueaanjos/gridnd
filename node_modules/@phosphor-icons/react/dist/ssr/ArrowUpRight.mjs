var p = Object.defineProperty, f = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var e = Object.getOwnPropertySymbols;
var R = Object.prototype.hasOwnProperty, w = Object.prototype.propertyIsEnumerable;
var m = (o, r, t) => r in o ? p(o, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[r] = t, a = (o, r) => {
  for (var t in r || (r = {}))
    R.call(r, t) && m(o, t, r[t]);
  if (e)
    for (var t of e(r))
      w.call(r, t) && m(o, t, r[t]);
  return o;
}, i = (o, r) => f(o, s(r));
import c, { forwardRef as g } from "react";
import h from "../lib/SSRBase.mjs";
import d from "../defs/ArrowUpRight.mjs";
const l = g((o, r) => /* @__PURE__ */ c.createElement(h, i(a({ ref: r }, o), { weights: d })));
l.displayName = "ArrowUpRight";
export {
  l as ArrowUpRight
};
