var i = Object.defineProperty, s = Object.defineProperties;
var n = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var f = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var p = (e, a, r) => a in e ? i(e, a, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[a] = r, t = (e, a) => {
  for (var r in a || (a = {}))
    f.call(a, r) && p(e, r, a[r]);
  if (o)
    for (var r of o(a))
      d.call(a, r) && p(e, r, a[r]);
  return e;
}, m = (e, a) => s(e, n(a));
import l, { forwardRef as c } from "react";
import g from "../lib/SSRBase.mjs";
import R from "../defs/HandsClapping.mjs";
const w = c((e, a) => /* @__PURE__ */ l.createElement(g, m(t({ ref: a }, e), { weights: R })));
w.displayName = "HandsClapping";
export {
  w as HandsClapping
};
