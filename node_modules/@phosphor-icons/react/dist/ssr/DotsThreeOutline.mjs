var s = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var m = (t, e, r) => e in t ? s(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, a = (t, e) => {
  for (var r in e || (e = {}))
    l.call(e, r) && m(t, r, e[r]);
  if (o)
    for (var r of o(e))
      n.call(e, r) && m(t, r, e[r]);
  return t;
}, i = (t, e) => f(t, p(e));
import c, { forwardRef as h } from "react";
import R from "../lib/SSRBase.mjs";
import d from "../defs/DotsThreeOutline.mjs";
const u = h((t, e) => /* @__PURE__ */ c.createElement(R, i(a({ ref: e }, t), { weights: d })));
u.displayName = "DotsThreeOutline";
export {
  u as DotsThreeOutline
};
