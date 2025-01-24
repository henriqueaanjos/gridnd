var f = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var R = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var i = (t, e, r) => e in t ? f(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, o = (t, e) => {
  for (var r in e || (e = {}))
    R.call(e, r) && i(t, r, e[r]);
  if (a)
    for (var r of a(e))
      n.call(e, r) && i(t, r, e[r]);
  return t;
}, m = (t, e) => p(t, s(e));
import c, { forwardRef as g } from "react";
import h from "../lib/SSRBase.mjs";
import d from "../defs/CaretLineRight.mjs";
const l = g((t, e) => /* @__PURE__ */ c.createElement(h, m(o({ ref: e }, t), { weights: d })));
l.displayName = "CaretLineRight";
export {
  l as CaretLineRight
};
