var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var d = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var o = (r, e, a) => e in r ? i(r, e, { enumerable: !0, configurable: !0, writable: !0, value: a }) : r[e] = a, m = (r, e) => {
  for (var a in e || (e = {}))
    d.call(e, a) && o(r, a, e[a]);
  if (t)
    for (var a of t(e))
      n.call(e, a) && o(r, a, e[a]);
  return r;
}, f = (r, e) => p(r, s(e));
import H, { forwardRef as c } from "react";
import R from "../lib/SSRBase.mjs";
import l from "../defs/HandHeart.mjs";
const w = c((r, e) => /* @__PURE__ */ H.createElement(R, f(m({ ref: e }, r), { weights: l })));
w.displayName = "HandHeart";
export {
  w as HandHeart
};
