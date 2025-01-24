var f = Object.defineProperty, n = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var a = (t, e, r) => e in t ? f(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, i = (t, e) => {
  for (var r in e || (e = {}))
    s.call(e, r) && a(t, r, e[r]);
  if (o)
    for (var r of o(e))
      c.call(e, r) && a(t, r, e[r]);
  return t;
}, m = (t, e) => n(t, p(e));
import R, { forwardRef as g } from "react";
import h from "../lib/IconBase.mjs";
import d from "../defs/CaretLineRight.mjs";
const l = g((t, e) => /* @__PURE__ */ R.createElement(h, m(i({ ref: e }, t), { weights: d })));
l.displayName = "CaretLineRight";
export {
  l as CaretLineRight
};
