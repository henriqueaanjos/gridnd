var s = Object.defineProperty, c = Object.defineProperties;
var l = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var f = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var a = (t, e, r) => e in t ? s(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, i = (t, e) => {
  for (var r in e || (e = {}))
    f.call(e, r) && a(t, r, e[r]);
  if (o)
    for (var r of o(e))
      n.call(e, r) && a(t, r, e[r]);
  return t;
}, m = (t, e) => c(t, l(e));
import p, { forwardRef as h } from "react";
import d from "../lib/IconBase.mjs";
import u from "../defs/DotsThreeOutlineVertical.mjs";
const w = h((t, e) => /* @__PURE__ */ p.createElement(d, m(i({ ref: e }, t), { weights: u })));
w.displayName = "DotsThreeOutlineVertical";
export {
  w as DotsThreeOutlineVertical
};
