var c = Object.defineProperty, f = Object.defineProperties;
var i = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, w = Object.prototype.propertyIsEnumerable;
var o = (t, e, r) => e in t ? c(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, m = (t, e) => {
  for (var r in e || (e = {}))
    p.call(e, r) && o(t, r, e[r]);
  if (a)
    for (var r of a(e))
      w.call(e, r) && o(t, r, e[r]);
  return t;
}, s = (t, e) => f(t, i(e));
import S, { forwardRef as h } from "react";
import R from "../lib/SSRBase.mjs";
import d from "../defs/Swatches.mjs";
const l = h((t, e) => /* @__PURE__ */ S.createElement(R, s(m({ ref: e }, t), { weights: d })));
l.displayName = "Swatches";
export {
  l as Swatches
};
