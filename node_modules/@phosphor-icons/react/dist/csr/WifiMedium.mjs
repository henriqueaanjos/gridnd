var f = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var r = (i, e, m) => e in i ? f(i, e, { enumerable: !0, configurable: !0, writable: !0, value: m }) : i[e] = m, t = (i, e) => {
  for (var m in e || (e = {}))
    c.call(e, m) && r(i, m, e[m]);
  if (o)
    for (var m of o(e))
      d.call(e, m) && r(i, m, e[m]);
  return i;
}, a = (i, e) => p(i, s(e));
import n, { forwardRef as l } from "react";
import u from "../lib/IconBase.mjs";
import w from "../defs/WifiMedium.mjs";
const I = l((i, e) => /* @__PURE__ */ n.createElement(u, a(t({ ref: e }, i), { weights: w })));
I.displayName = "WifiMedium";
export {
  I as WifiMedium
};
