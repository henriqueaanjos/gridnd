var w = Object.defineProperty, c = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var i = (o, r, e) => r in o ? w(o, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : o[r] = e, m = (o, r) => {
  for (var e in r || (r = {}))
    p.call(r, e) && i(o, e, r[e]);
  if (t)
    for (var e of t(r))
      s.call(r, e) && i(o, e, r[e]);
  return o;
}, a = (o, r) => c(o, f(r));
import R, { forwardRef as l } from "react";
import n from "../lib/SSRBase.mjs";
import g from "../defs/ArrowCircleDownRight.mjs";
const h = l((o, r) => /* @__PURE__ */ R.createElement(n, a(m({ ref: r }, o), { weights: g })));
h.displayName = "ArrowCircleDownRight";
export {
  h as ArrowCircleDownRight
};
