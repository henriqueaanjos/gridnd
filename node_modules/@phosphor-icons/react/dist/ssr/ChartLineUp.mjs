var p = Object.defineProperty, f = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var n = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var o = (r, e, t) => e in r ? p(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t, m = (r, e) => {
  for (var t in e || (e = {}))
    n.call(e, t) && o(r, t, e[t]);
  if (a)
    for (var t of a(e))
      c.call(e, t) && o(r, t, e[t]);
  return r;
}, i = (r, e) => f(r, s(e));
import h, { forwardRef as R } from "react";
import d from "../lib/SSRBase.mjs";
import l from "../defs/ChartLineUp.mjs";
const w = R((r, e) => /* @__PURE__ */ h.createElement(d, i(m({ ref: e }, r), { weights: l })));
w.displayName = "ChartLineUp";
export {
  w as ChartLineUp
};
