var c = Object.defineProperty, f = Object.defineProperties;
var i = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var n = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var r = (a, e, t) => e in a ? c(a, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : a[e] = t, m = (a, e) => {
  for (var t in e || (e = {}))
    n.call(e, t) && r(a, t, e[t]);
  if (o)
    for (var t of o(e))
      p.call(e, t) && r(a, t, e[t]);
  return a;
}, s = (a, e) => f(a, i(e));
import d, { forwardRef as l } from "react";
import R from "../lib/IconBase.mjs";
import g from "../defs/RectangleDashed.mjs";
const h = l((a, e) => /* @__PURE__ */ d.createElement(R, s(m({ ref: e }, a), { weights: g })));
h.displayName = "RectangleDashed";
export {
  h as RectangleDashed
};
