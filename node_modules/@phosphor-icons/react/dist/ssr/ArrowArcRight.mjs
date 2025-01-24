var c = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var e = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, R = Object.prototype.propertyIsEnumerable;
var m = (o, r, t) => r in o ? c(o, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[r] = t, a = (o, r) => {
  for (var t in r || (r = {}))
    s.call(r, t) && m(o, t, r[t]);
  if (e)
    for (var t of e(r))
      R.call(r, t) && m(o, t, r[t]);
  return o;
}, i = (o, r) => f(o, p(r));
import w, { forwardRef as A } from "react";
import g from "../lib/SSRBase.mjs";
import h from "../defs/ArrowArcRight.mjs";
const d = A((o, r) => /* @__PURE__ */ w.createElement(g, i(a({ ref: r }, o), { weights: h })));
d.displayName = "ArrowArcRight";
export {
  d as ArrowArcRight
};
