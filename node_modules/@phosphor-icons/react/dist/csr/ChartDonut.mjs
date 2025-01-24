var i = Object.defineProperty, n = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var e = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var a = (o, t, r) => t in o ? i(o, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[t] = r, m = (o, t) => {
  for (var r in t || (t = {}))
    s.call(t, r) && a(o, r, t[r]);
  if (e)
    for (var r of e(t))
      c.call(t, r) && a(o, r, t[r]);
  return o;
}, f = (o, t) => n(o, p(t));
import h, { forwardRef as d } from "react";
import l from "../lib/IconBase.mjs";
import u from "../defs/ChartDonut.mjs";
const w = d((o, t) => /* @__PURE__ */ h.createElement(l, f(m({ ref: t }, o), { weights: u })));
w.displayName = "ChartDonut";
export {
  w as ChartDonut
};
