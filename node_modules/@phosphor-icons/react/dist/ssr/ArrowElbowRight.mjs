var w = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var e = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, R = Object.prototype.propertyIsEnumerable;
var m = (o, r, t) => r in o ? w(o, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[r] = t, a = (o, r) => {
  for (var t in r || (r = {}))
    s.call(r, t) && m(o, t, r[t]);
  if (e)
    for (var t of e(r))
      R.call(r, t) && m(o, t, r[t]);
  return o;
}, i = (o, r) => f(o, p(r));
import l, { forwardRef as c } from "react";
import g from "../lib/SSRBase.mjs";
import h from "../defs/ArrowElbowRight.mjs";
const E = c((o, r) => /* @__PURE__ */ l.createElement(g, i(a({ ref: r }, o), { weights: h })));
E.displayName = "ArrowElbowRight";
export {
  E as ArrowElbowRight
};
