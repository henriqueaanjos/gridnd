var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var o = (e, t, r) => t in e ? i(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, m = (e, t) => {
  for (var r in t || (t = {}))
    l.call(t, r) && o(e, r, t[r]);
  if (a)
    for (var r of a(t))
      c.call(t, r) && o(e, r, t[r]);
  return e;
}, f = (e, t) => p(e, s(t));
import R, { forwardRef as d } from "react";
import n from "../lib/SSRBase.mjs";
import u from "../defs/Vault.mjs";
const w = d((e, t) => /* @__PURE__ */ R.createElement(n, f(m({ ref: t }, e), { weights: u })));
w.displayName = "Vault";
export {
  w as Vault
};
