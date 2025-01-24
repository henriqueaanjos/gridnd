var f = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var m = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, u = Object.prototype.propertyIsEnumerable;
var o = (r, e, t) => e in r ? f(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t, a = (r, e) => {
  for (var t in e || (e = {}))
    c.call(e, t) && o(r, t, e[t]);
  if (m)
    for (var t of m(e))
      u.call(e, t) && o(r, t, e[t]);
  return r;
}, i = (r, e) => p(r, s(e));
import g, { forwardRef as h } from "react";
import n from "../lib/IconBase.mjs";
import E from "../defs/NumberSquareEight.mjs";
const N = h((r, e) => /* @__PURE__ */ g.createElement(n, i(a({ ref: e }, r), { weights: E })));
N.displayName = "NumberSquareEight";
export {
  N as NumberSquareEight
};
