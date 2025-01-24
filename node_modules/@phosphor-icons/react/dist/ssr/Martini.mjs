var f = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var n = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var i = (t, r, e) => r in t ? f(t, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[r] = e, o = (t, r) => {
  for (var e in r || (r = {}))
    n.call(r, e) && i(t, e, r[e]);
  if (a)
    for (var e of a(r))
      c.call(r, e) && i(t, e, r[e]);
  return t;
}, m = (t, r) => p(t, s(r));
import R, { forwardRef as d } from "react";
import l from "../lib/SSRBase.mjs";
import w from "../defs/Martini.mjs";
const M = d((t, r) => /* @__PURE__ */ R.createElement(l, m(o({ ref: r }, t), { weights: w })));
M.displayName = "Martini";
export {
  M as Martini
};
