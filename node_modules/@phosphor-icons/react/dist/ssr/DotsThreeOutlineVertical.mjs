var s = Object.defineProperty, l = Object.defineProperties;
var c = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var f = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var a = (t, e, r) => e in t ? s(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, i = (t, e) => {
  for (var r in e || (e = {}))
    f.call(e, r) && a(t, r, e[r]);
  if (o)
    for (var r of o(e))
      p.call(e, r) && a(t, r, e[r]);
  return t;
}, m = (t, e) => l(t, c(e));
import n, { forwardRef as h } from "react";
import R from "../lib/SSRBase.mjs";
import d from "../defs/DotsThreeOutlineVertical.mjs";
const u = h((t, e) => /* @__PURE__ */ n.createElement(R, m(i({ ref: e }, t), { weights: d })));
u.displayName = "DotsThreeOutlineVertical";
export {
  u as DotsThreeOutlineVertical
};
