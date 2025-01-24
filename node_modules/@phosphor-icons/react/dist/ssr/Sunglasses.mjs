var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var o = (s, e, r) => e in s ? f(s, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : s[e] = r, t = (s, e) => {
  for (var r in e || (e = {}))
    l.call(e, r) && o(s, r, e[r]);
  if (a)
    for (var r of a(e))
      n.call(e, r) && o(s, r, e[r]);
  return s;
}, m = (s, e) => i(s, p(e));
import S, { forwardRef as c } from "react";
import g from "../lib/SSRBase.mjs";
import R from "../defs/Sunglasses.mjs";
const d = c((s, e) => /* @__PURE__ */ S.createElement(g, m(t({ ref: e }, s), { weights: R })));
d.displayName = "Sunglasses";
export {
  d as Sunglasses
};
