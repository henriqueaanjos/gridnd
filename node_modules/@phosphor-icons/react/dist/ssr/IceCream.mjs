var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, I = Object.prototype.propertyIsEnumerable;
var o = (r, e, m) => e in r ? f(r, e, { enumerable: !0, configurable: !0, writable: !0, value: m }) : r[e] = m, t = (r, e) => {
  for (var m in e || (e = {}))
    s.call(e, m) && o(r, m, e[m]);
  if (a)
    for (var m of a(e))
      I.call(e, m) && o(r, m, e[m]);
  return r;
}, c = (r, e) => i(r, p(e));
import R, { forwardRef as d } from "react";
import l from "../lib/SSRBase.mjs";
import n from "../defs/IceCream.mjs";
const w = d((r, e) => /* @__PURE__ */ R.createElement(l, c(t({ ref: e }, r), { weights: n })));
w.displayName = "IceCream";
export {
  w as IceCream
};
