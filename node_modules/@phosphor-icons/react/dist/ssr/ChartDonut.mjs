var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var e = Object.getOwnPropertySymbols;
var n = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var a = (r, t, o) => t in r ? i(r, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[t] = o, m = (r, t) => {
  for (var o in t || (t = {}))
    n.call(t, o) && a(r, o, t[o]);
  if (e)
    for (var o of e(t))
      c.call(t, o) && a(r, o, t[o]);
  return r;
}, f = (r, t) => p(r, s(t));
import h, { forwardRef as R } from "react";
import d from "../lib/SSRBase.mjs";
import l from "../defs/ChartDonut.mjs";
const u = R((r, t) => /* @__PURE__ */ h.createElement(d, f(m({ ref: t }, r), { weights: l })));
u.displayName = "ChartDonut";
export {
  u as ChartDonut
};
