var p = Object.defineProperty, f = Object.defineProperties;
var n = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var m = (e, o, r) => o in e ? p(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, a = (e, o) => {
  for (var r in o || (o = {}))
    s.call(o, r) && m(e, r, o[r]);
  if (t)
    for (var r of t(o))
      c.call(o, r) && m(e, r, o[r]);
  return e;
}, i = (e, o) => f(e, n(o));
import l, { forwardRef as g } from "react";
import d from "../lib/IconBase.mjs";
import w from "../defs/AlignTop.mjs";
const A = g((e, o) => /* @__PURE__ */ l.createElement(d, i(a({ ref: o }, e), { weights: w })));
A.displayName = "AlignTop";
export {
  A as AlignTop
};
