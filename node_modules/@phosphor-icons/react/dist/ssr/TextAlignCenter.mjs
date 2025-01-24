var n = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var m = (t, e, r) => e in t ? n(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, a = (t, e) => {
  for (var r in e || (e = {}))
    s.call(e, r) && m(t, r, e[r]);
  if (o)
    for (var r of o(e))
      l.call(e, r) && m(t, r, e[r]);
  return t;
}, i = (t, e) => f(t, p(e));
import c, { forwardRef as g } from "react";
import x from "../lib/SSRBase.mjs";
import R from "../defs/TextAlignCenter.mjs";
const d = g((t, e) => /* @__PURE__ */ c.createElement(x, i(a({ ref: e }, t), { weights: R })));
d.displayName = "TextAlignCenter";
export {
  d as TextAlignCenter
};
