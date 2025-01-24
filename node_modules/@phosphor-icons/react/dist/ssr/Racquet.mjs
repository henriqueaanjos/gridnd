var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, R = Object.prototype.propertyIsEnumerable;
var o = (t, e, r) => e in t ? f(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, m = (t, e) => {
  for (var r in e || (e = {}))
    s.call(e, r) && o(t, r, e[r]);
  if (a)
    for (var r of a(e))
      R.call(e, r) && o(t, r, e[r]);
  return t;
}, c = (t, e) => i(t, p(e));
import d, { forwardRef as l } from "react";
import n from "../lib/SSRBase.mjs";
import q from "../defs/Racquet.mjs";
const u = l((t, e) => /* @__PURE__ */ d.createElement(n, c(m({ ref: e }, t), { weights: q })));
u.displayName = "Racquet";
export {
  u as Racquet
};
