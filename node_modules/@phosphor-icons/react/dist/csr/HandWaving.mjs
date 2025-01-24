var n = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var t = (e, a, o) => a in e ? n(e, a, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[a] = o, m = (e, a) => {
  for (var o in a || (a = {}))
    s.call(a, o) && t(e, o, a[o]);
  if (r)
    for (var o of r(a))
      c.call(a, o) && t(e, o, a[o]);
  return e;
}, i = (e, a) => f(e, p(a));
import d, { forwardRef as g } from "react";
import l from "../lib/IconBase.mjs";
import v from "../defs/HandWaving.mjs";
const w = g((e, a) => /* @__PURE__ */ d.createElement(l, i(m({ ref: a }, e), { weights: v })));
w.displayName = "HandWaving";
export {
  w as HandWaving
};
