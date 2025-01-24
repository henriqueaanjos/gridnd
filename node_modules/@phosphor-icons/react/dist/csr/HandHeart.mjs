var i = Object.defineProperty, n = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var o = (r, e, a) => e in r ? i(r, e, { enumerable: !0, configurable: !0, writable: !0, value: a }) : r[e] = a, m = (r, e) => {
  for (var a in e || (e = {}))
    s.call(e, a) && o(r, a, e[a]);
  if (t)
    for (var a of t(e))
      c.call(e, a) && o(r, a, e[a]);
  return r;
}, f = (r, e) => n(r, p(e));
import d, { forwardRef as H } from "react";
import l from "../lib/IconBase.mjs";
import w from "../defs/HandHeart.mjs";
const I = H((r, e) => /* @__PURE__ */ d.createElement(l, f(m({ ref: e }, r), { weights: w })));
I.displayName = "HandHeart";
export {
  I as HandHeart
};
