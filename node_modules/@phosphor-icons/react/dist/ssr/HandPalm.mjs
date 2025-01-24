var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var d = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var o = (e, a, m) => a in e ? i(e, a, { enumerable: !0, configurable: !0, writable: !0, value: m }) : e[a] = m, t = (e, a) => {
  for (var m in a || (a = {}))
    d.call(a, m) && o(e, m, a[m]);
  if (r)
    for (var m of r(a))
      l.call(a, m) && o(e, m, a[m]);
  return e;
}, f = (e, a) => p(e, s(a));
import n, { forwardRef as c } from "react";
import R from "../lib/SSRBase.mjs";
import w from "../defs/HandPalm.mjs";
const H = c((e, a) => /* @__PURE__ */ n.createElement(R, f(t({ ref: a }, e), { weights: w })));
H.displayName = "HandPalm";
export {
  H as HandPalm
};
