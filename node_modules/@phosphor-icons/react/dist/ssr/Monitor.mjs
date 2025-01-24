var f = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var e = Object.getOwnPropertySymbols;
var n = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var m = (r, o, t) => o in r ? f(r, o, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[o] = t, a = (r, o) => {
  for (var t in o || (o = {}))
    n.call(o, t) && m(r, t, o[t]);
  if (e)
    for (var t of e(o))
      c.call(o, t) && m(r, t, o[t]);
  return r;
}, i = (r, o) => p(r, s(o));
import R, { forwardRef as d } from "react";
import l from "../lib/SSRBase.mjs";
import w from "../defs/Monitor.mjs";
const M = d((r, o) => /* @__PURE__ */ R.createElement(l, i(a({ ref: o }, r), { weights: w })));
M.displayName = "Monitor";
export {
  M as Monitor
};
