var f = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var d = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var o = (i, e, m) => e in i ? f(i, e, { enumerable: !0, configurable: !0, writable: !0, value: m }) : i[e] = m, t = (i, e) => {
  for (var m in e || (e = {}))
    d.call(e, m) && o(i, m, e[m]);
  if (r)
    for (var m of r(e))
      c.call(e, m) && o(i, m, e[m]);
  return i;
}, a = (i, e) => p(i, s(e));
import R, { forwardRef as l } from "react";
import n from "../lib/SSRBase.mjs";
import u from "../defs/WifiMedium.mjs";
const w = l((i, e) => /* @__PURE__ */ R.createElement(n, a(t({ ref: e }, i), { weights: u })));
w.displayName = "WifiMedium";
export {
  w as WifiMedium
};
