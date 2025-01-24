var c = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var i = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, y = Object.prototype.propertyIsEnumerable;
var o = (t, r, e) => r in t ? c(t, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[r] = e, m = (t, r) => {
  for (var e in r || (r = {}))
    s.call(r, e) && o(t, e, r[e]);
  if (i)
    for (var e of i(r))
      y.call(r, e) && o(t, e, r[e]);
  return t;
}, a = (t, r) => f(t, p(r));
import R, { forwardRef as d } from "react";
import l from "../lib/SSRBase.mjs";
import n from "../defs/Circuitry.mjs";
const u = d((t, r) => /* @__PURE__ */ R.createElement(l, a(m({ ref: r }, t), { weights: n })));
u.displayName = "Circuitry";
export {
  u as Circuitry
};
