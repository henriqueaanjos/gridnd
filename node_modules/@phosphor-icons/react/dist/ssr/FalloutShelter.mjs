var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, S = Object.prototype.propertyIsEnumerable;
var a = (t, e, r) => e in t ? f(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, l = (t, e) => {
  for (var r in e || (e = {}))
    s.call(e, r) && a(t, r, e[r]);
  if (o)
    for (var r of o(e))
      S.call(e, r) && a(t, r, e[r]);
  return t;
}, m = (t, e) => i(t, p(e));
import c, { forwardRef as h } from "react";
import R from "../lib/SSRBase.mjs";
import d from "../defs/FalloutShelter.mjs";
const n = h((t, e) => /* @__PURE__ */ c.createElement(R, m(l({ ref: e }, t), { weights: d })));
n.displayName = "FalloutShelter";
export {
  n as FalloutShelter
};
