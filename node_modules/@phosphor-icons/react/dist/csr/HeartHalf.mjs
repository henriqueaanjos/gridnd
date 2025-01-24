var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var o = (r, e, a) => e in r ? i(r, e, { enumerable: !0, configurable: !0, writable: !0, value: a }) : r[e] = a, m = (r, e) => {
  for (var a in e || (e = {}))
    c.call(e, a) && o(r, a, e[a]);
  if (t)
    for (var a of t(e))
      l.call(e, a) && o(r, a, e[a]);
  return r;
}, f = (r, e) => p(r, s(e));
import H, { forwardRef as n } from "react";
import d from "../lib/IconBase.mjs";
import w from "../defs/HeartHalf.mjs";
const I = n((r, e) => /* @__PURE__ */ H.createElement(d, f(m({ ref: e }, r), { weights: w })));
I.displayName = "HeartHalf";
export {
  I as HeartHalf
};
