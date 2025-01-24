var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var o = (s, e, r) => e in s ? f(s, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : s[e] = r, t = (s, e) => {
  for (var r in e || (e = {}))
    l.call(e, r) && o(s, r, e[r]);
  if (a)
    for (var r of a(e))
      c.call(e, r) && o(s, r, e[r]);
  return s;
}, m = (s, e) => i(s, p(e));
import g, { forwardRef as y } from "react";
import E from "../lib/SSRBase.mjs";
import R from "../defs/Eyeglasses.mjs";
const d = y((s, e) => /* @__PURE__ */ g.createElement(E, m(t({ ref: e }, s), { weights: R })));
d.displayName = "Eyeglasses";
export {
  d as Eyeglasses
};
