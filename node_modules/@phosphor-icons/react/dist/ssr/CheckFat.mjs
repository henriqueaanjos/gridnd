var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, h = Object.prototype.propertyIsEnumerable;
var o = (t, e, r) => e in t ? f(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, m = (t, e) => {
  for (var r in e || (e = {}))
    s.call(e, r) && o(t, r, e[r]);
  if (a)
    for (var r of a(e))
      h.call(e, r) && o(t, r, e[r]);
  return t;
}, c = (t, e) => i(t, p(e));
import R, { forwardRef as d } from "react";
import k from "../lib/SSRBase.mjs";
import l from "../defs/CheckFat.mjs";
const n = d((t, e) => /* @__PURE__ */ R.createElement(k, c(m({ ref: e }, t), { weights: l })));
n.displayName = "CheckFat";
export {
  n as CheckFat
};
