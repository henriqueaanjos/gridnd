var f = Object.defineProperty, c = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, R = Object.prototype.propertyIsEnumerable;
var i = (t, e, r) => e in t ? f(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, o = (t, e) => {
  for (var r in e || (e = {}))
    s.call(e, r) && i(t, r, e[r]);
  if (a)
    for (var r of a(e))
      R.call(e, r) && i(t, r, e[r]);
  return t;
}, m = (t, e) => c(t, p(e));
import d, { forwardRef as l } from "react";
import n from "../lib/SSRBase.mjs";
import w from "../defs/Certificate.mjs";
const C = l((t, e) => /* @__PURE__ */ d.createElement(n, m(o({ ref: e }, t), { weights: w })));
C.displayName = "Certificate";
export {
  C as Certificate
};
