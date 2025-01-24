var i = Object.defineProperty, l = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var s = (e, t, r) => t in e ? i(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, m = (e, t) => {
  for (var r in t || (t = {}))
    p.call(t, r) && s(e, r, t[r]);
  if (o)
    for (var r of o(t))
      c.call(t, r) && s(e, r, t[r]);
  return e;
}, a = (e, t) => l(e, f(t));
import B, { forwardRef as R } from "react";
import d from "../lib/SSRBase.mjs";
import n from "../defs/ListBullets.mjs";
const u = R((e, t) => /* @__PURE__ */ B.createElement(d, a(m({ ref: t }, e), { weights: n })));
u.displayName = "ListBullets";
export {
  u as ListBullets
};
