var p = Object.defineProperty, c = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, R = Object.prototype.propertyIsEnumerable;
var m = (t, e, r) => e in t ? p(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, a = (t, e) => {
  for (var r in e || (e = {}))
    s.call(e, r) && m(t, r, e[r]);
  if (o)
    for (var r of o(e))
      R.call(e, r) && m(t, r, e[r]);
  return t;
}, i = (t, e) => c(t, f(e));
import d, { forwardRef as l } from "react";
import n from "../lib/SSRBase.mjs";
import w from "../defs/Receipt.mjs";
const S = l((t, e) => /* @__PURE__ */ d.createElement(n, i(a({ ref: e }, t), { weights: w })));
S.displayName = "Receipt";
export {
  S as Receipt
};
