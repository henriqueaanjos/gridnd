var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, g = Object.prototype.propertyIsEnumerable;
var a = (e, r, m) => r in e ? i(e, r, { enumerable: !0, configurable: !0, writable: !0, value: m }) : e[r] = m, t = (e, r) => {
  for (var m in r || (r = {}))
    c.call(r, m) && a(e, m, r[m]);
  if (o)
    for (var m of o(r))
      g.call(r, m) && a(e, m, r[m]);
  return e;
}, f = (e, r) => p(e, s(r));
import n, { forwardRef as b } from "react";
import d from "../lib/IconBase.mjs";
import l from "../defs/Hamburger.mjs";
const u = b((e, r) => /* @__PURE__ */ n.createElement(d, f(t({ ref: r }, e), { weights: l })));
u.displayName = "Hamburger";
export {
  u as Hamburger
};
