var f = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, g = Object.prototype.propertyIsEnumerable;
var t = (e, i, r) => i in e ? f(e, i, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[i] = r, m = (e, i) => {
  for (var r in i || (i = {}))
    c.call(i, r) && t(e, r, i[r]);
  if (o)
    for (var r of o(i))
      g.call(i, r) && t(e, r, i[r]);
  return e;
}, a = (e, i) => p(e, s(i));
import h, { forwardRef as R } from "react";
import d from "../lib/SSRBase.mjs";
import l from "../defs/WifiHigh.mjs";
const n = R((e, i) => /* @__PURE__ */ h.createElement(d, a(m({ ref: i }, e), { weights: l })));
n.displayName = "WifiHigh";
export {
  n as WifiHigh
};
