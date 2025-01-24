var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, g = Object.prototype.propertyIsEnumerable;
var o = (e, r, m) => r in e ? i(e, r, { enumerable: !0, configurable: !0, writable: !0, value: m }) : e[r] = m, t = (e, r) => {
  for (var m in r || (r = {}))
    c.call(r, m) && o(e, m, r[m]);
  if (a)
    for (var m of a(r))
      g.call(r, m) && o(e, m, r[m]);
  return e;
}, f = (e, r) => p(e, s(r));
import R, { forwardRef as b } from "react";
import d from "../lib/SSRBase.mjs";
import l from "../defs/Hamburger.mjs";
const n = b((e, r) => /* @__PURE__ */ R.createElement(d, f(t({ ref: r }, e), { weights: l })));
n.displayName = "Hamburger";
export {
  n as Hamburger
};
