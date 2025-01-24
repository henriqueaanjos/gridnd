var l = Object.defineProperty, f = Object.defineProperties;
var i = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var t = (e, a, r) => a in e ? l(e, a, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[a] = r, m = (e, a) => {
  for (var r in a || (a = {}))
    p.call(a, r) && t(e, r, a[r]);
  if (o)
    for (var r of o(a))
      s.call(a, r) && t(e, r, a[r]);
  return e;
}, n = (e, a) => f(e, i(a));
import c, { forwardRef as d } from "react";
import B from "../lib/IconBase.mjs";
import k from "../defs/CalendarBlank.mjs";
const w = d((e, a) => /* @__PURE__ */ c.createElement(B, n(m({ ref: a }, e), { weights: k })));
w.displayName = "CalendarBlank";
export {
  w as CalendarBlank
};
