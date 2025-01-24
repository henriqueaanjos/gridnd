var p = Object.defineProperty, s = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, B = Object.prototype.propertyIsEnumerable;
var t = (a, e, r) => e in a ? p(a, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : a[e] = r, m = (a, e) => {
  for (var r in e || (e = {}))
    i.call(e, r) && t(a, r, e[r]);
  if (o)
    for (var r of o(e))
      B.call(e, r) && t(a, r, e[r]);
  return a;
}, c = (a, e) => s(a, f(e));
import R, { forwardRef as d } from "react";
import k from "../lib/SSRBase.mjs";
import l from "../defs/Backspace.mjs";
const n = d((a, e) => /* @__PURE__ */ R.createElement(k, c(m({ ref: e }, a), { weights: l })));
n.displayName = "Backspace";
export {
  n as Backspace
};
