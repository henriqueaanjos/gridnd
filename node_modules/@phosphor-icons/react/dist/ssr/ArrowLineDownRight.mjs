var n = Object.defineProperty, w = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var i = (o, r, e) => r in o ? n(o, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : o[r] = e, m = (o, r) => {
  for (var e in r || (r = {}))
    p.call(r, e) && i(o, e, r[e]);
  if (t)
    for (var e of t(r))
      s.call(r, e) && i(o, e, r[e]);
  return o;
}, a = (o, r) => w(o, f(r));
import R, { forwardRef as c } from "react";
import g from "../lib/SSRBase.mjs";
import h from "../defs/ArrowLineDownRight.mjs";
const d = c((o, r) => /* @__PURE__ */ R.createElement(g, a(m({ ref: r }, o), { weights: h })));
d.displayName = "ArrowLineDownRight";
export {
  d as ArrowLineDownRight
};
