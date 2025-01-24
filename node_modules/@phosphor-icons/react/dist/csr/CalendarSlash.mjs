var l = Object.defineProperty, f = Object.defineProperties;
var i = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var n = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var t = (e, a, r) => a in e ? l(e, a, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[a] = r, m = (e, a) => {
  for (var r in a || (a = {}))
    n.call(a, r) && t(e, r, a[r]);
  if (o)
    for (var r of o(a))
      p.call(a, r) && t(e, r, a[r]);
  return e;
}, s = (e, a) => f(e, i(a));
import c, { forwardRef as d } from "react";
import h from "../lib/IconBase.mjs";
import w from "../defs/CalendarSlash.mjs";
const C = d((e, a) => /* @__PURE__ */ c.createElement(h, s(m({ ref: a }, e), { weights: w })));
C.displayName = "CalendarSlash";
export {
  C as CalendarSlash
};
