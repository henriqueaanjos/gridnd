var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var o = (t, e, r) => e in t ? f(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, m = (t, e) => {
  for (var r in e || (e = {}))
    s.call(e, r) && o(t, r, e[r]);
  if (a)
    for (var r of a(e))
      c.call(e, r) && o(t, r, e[r]);
  return t;
}, l = (t, e) => i(t, p(e));
import R, { forwardRef as d } from "react";
import n from "../lib/SSRBase.mjs";
import w from "../defs/Wallet.mjs";
const S = d((t, e) => /* @__PURE__ */ R.createElement(n, l(m({ ref: e }, t), { weights: w })));
S.displayName = "Wallet";
export {
  S as Wallet
};
