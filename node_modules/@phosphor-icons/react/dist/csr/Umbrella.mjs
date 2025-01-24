var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var a = (r, e, m) => e in r ? f(r, e, { enumerable: !0, configurable: !0, writable: !0, value: m }) : r[e] = m, t = (r, e) => {
  for (var m in e || (e = {}))
    s.call(e, m) && a(r, m, e[m]);
  if (o)
    for (var m of o(e))
      c.call(e, m) && a(r, m, e[m]);
  return r;
}, l = (r, e) => i(r, p(e));
import n, { forwardRef as b } from "react";
import d from "../lib/IconBase.mjs";
import w from "../defs/Umbrella.mjs";
const I = b((r, e) => /* @__PURE__ */ n.createElement(d, l(t({ ref: e }, r), { weights: w })));
I.displayName = "Umbrella";
export {
  I as Umbrella
};
