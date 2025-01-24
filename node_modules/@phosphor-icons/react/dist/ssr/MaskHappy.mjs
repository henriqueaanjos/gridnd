var s = Object.defineProperty, f = Object.defineProperties;
var i = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, y = Object.prototype.propertyIsEnumerable;
var p = (e, a, r) => a in e ? s(e, a, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[a] = r, t = (e, a) => {
  for (var r in a || (a = {}))
    c.call(a, r) && p(e, r, a[r]);
  if (o)
    for (var r of o(a))
      y.call(a, r) && p(e, r, a[r]);
  return e;
}, m = (e, a) => f(e, i(a));
import R, { forwardRef as d } from "react";
import k from "../lib/SSRBase.mjs";
import l from "../defs/MaskHappy.mjs";
const n = d((e, a) => /* @__PURE__ */ R.createElement(k, m(t({ ref: a }, e), { weights: l })));
n.displayName = "MaskHappy";
export {
  n as MaskHappy
};
