var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, I = Object.prototype.propertyIsEnumerable;
var a = (r, e, m) => e in r ? f(r, e, { enumerable: !0, configurable: !0, writable: !0, value: m }) : r[e] = m, t = (r, e) => {
  for (var m in e || (e = {}))
    s.call(e, m) && a(r, m, e[m]);
  if (o)
    for (var m of o(e))
      I.call(e, m) && a(r, m, e[m]);
  return r;
}, c = (r, e) => i(r, p(e));
import n, { forwardRef as d } from "react";
import l from "../lib/IconBase.mjs";
import w from "../defs/IceCream.mjs";
const C = d((r, e) => /* @__PURE__ */ n.createElement(l, c(t({ ref: e }, r), { weights: w })));
C.displayName = "IceCream";
export {
  C as IceCream
};
