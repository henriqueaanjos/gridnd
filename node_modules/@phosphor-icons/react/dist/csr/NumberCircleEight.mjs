var c = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var m = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var o = (r, e, t) => e in r ? c(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t, i = (r, e) => {
  for (var t in e || (e = {}))
    s.call(e, t) && o(r, t, e[t]);
  if (m)
    for (var t of m(e))
      l.call(e, t) && o(r, t, e[t]);
  return r;
}, a = (r, e) => f(r, p(e));
import g, { forwardRef as h } from "react";
import n from "../lib/IconBase.mjs";
import E from "../defs/NumberCircleEight.mjs";
const N = h((r, e) => /* @__PURE__ */ g.createElement(n, a(i({ ref: e }, r), { weights: E })));
N.displayName = "NumberCircleEight";
export {
  N as NumberCircleEight
};
