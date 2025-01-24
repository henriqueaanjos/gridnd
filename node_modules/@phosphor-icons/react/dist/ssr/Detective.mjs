var c = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, R = Object.prototype.propertyIsEnumerable;
var m = (t, e, r) => e in t ? c(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, a = (t, e) => {
  for (var r in e || (e = {}))
    s.call(e, r) && m(t, r, e[r]);
  if (o)
    for (var r of o(e))
      R.call(e, r) && m(t, r, e[r]);
  return t;
}, i = (t, e) => f(t, p(e));
import d, { forwardRef as l } from "react";
import n from "../lib/SSRBase.mjs";
import v from "../defs/Detective.mjs";
const w = l((t, e) => /* @__PURE__ */ d.createElement(n, i(a({ ref: e }, t), { weights: v })));
w.displayName = "Detective";
export {
  w as Detective
};
