var s = Object.defineProperty, n = Object.defineProperties;
var c = Object.getOwnPropertyDescriptors;
var i = Object.getOwnPropertySymbols;
var f = Object.prototype.hasOwnProperty, h = Object.prototype.propertyIsEnumerable;
var o = (a, e, r) => e in a ? s(a, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : a[e] = r, t = (a, e) => {
  for (var r in e || (e = {}))
    f.call(e, r) && o(a, r, e[r]);
  if (i)
    for (var r of i(e))
      h.call(e, r) && o(a, r, e[r]);
  return a;
}, m = (a, e) => n(a, c(e));
import p, { forwardRef as g } from "react";
import R from "../lib/SSRBase.mjs";
import d from "../defs/WashingMachine.mjs";
const l = g((a, e) => /* @__PURE__ */ p.createElement(R, m(t({ ref: e }, a), { weights: d })));
l.displayName = "WashingMachine";
export {
  l as WashingMachine
};
