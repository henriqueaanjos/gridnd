var n = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var a = (o, e, r) => e in o ? n(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, m = (o, e) => {
  for (var r in e || (e = {}))
    s.call(e, r) && a(o, r, e[r]);
  if (t)
    for (var r of t(e))
      c.call(e, r) && a(o, r, e[r]);
  return o;
}, i = (o, e) => f(o, p(e));
import w, { forwardRef as h } from "react";
import d from "../lib/IconBase.mjs";
import l from "../defs/ChartLineDown.mjs";
const C = h((o, e) => /* @__PURE__ */ w.createElement(d, i(m({ ref: e }, o), { weights: l })));
C.displayName = "ChartLineDown";
export {
  C as ChartLineDown
};
