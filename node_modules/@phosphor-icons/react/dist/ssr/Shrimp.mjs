var p = Object.defineProperty, f = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var S = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var t = (e, r, m) => r in e ? p(e, r, { enumerable: !0, configurable: !0, writable: !0, value: m }) : e[r] = m, a = (e, r) => {
  for (var m in r || (r = {}))
    S.call(r, m) && t(e, m, r[m]);
  if (o)
    for (var m of o(r))
      c.call(r, m) && t(e, m, r[m]);
  return e;
}, i = (e, r) => f(e, s(r));
import h, { forwardRef as R } from "react";
import d from "../lib/SSRBase.mjs";
import l from "../defs/Shrimp.mjs";
const n = R((e, r) => /* @__PURE__ */ h.createElement(d, i(a({ ref: r }, e), { weights: l })));
n.displayName = "Shrimp";
export {
  n as Shrimp
};
