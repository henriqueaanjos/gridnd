var p = Object.defineProperty, l = Object.defineProperties;
var n = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var f = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var t = (r, e, a) => e in r ? p(r, e, { enumerable: !0, configurable: !0, writable: !0, value: a }) : r[e] = a, m = (r, e) => {
  for (var a in e || (e = {}))
    f.call(e, a) && t(r, a, e[a]);
  if (o)
    for (var a of o(e))
      s.call(e, a) && t(r, a, e[a]);
  return r;
}, i = (r, e) => l(r, n(e));
import S, { forwardRef as c } from "react";
import B from "../lib/SSRBase.mjs";
import R from "../defs/SpinnerBall.mjs";
const d = c((r, e) => /* @__PURE__ */ S.createElement(B, i(m({ ref: e }, r), { weights: R })));
d.displayName = "SpinnerBall";
export {
  d as SpinnerBall
};
