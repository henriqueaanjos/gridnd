var p = Object.defineProperty, f = Object.defineProperties;
var n = Object.getOwnPropertyDescriptors;
var e = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var m = (r, o, t) => o in r ? p(r, o, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[o] = t, a = (r, o) => {
  for (var t in o || (o = {}))
    s.call(o, t) && m(r, t, o[t]);
  if (e)
    for (var t of e(o))
      c.call(o, t) && m(r, t, o[t]);
  return r;
}, i = (r, o) => f(r, n(o));
import w, { forwardRef as d } from "react";
import l from "../lib/IconBase.mjs";
import A from "../defs/MonitorArrowUp.mjs";
const I = d((r, o) => /* @__PURE__ */ w.createElement(l, i(a({ ref: o }, r), { weights: A })));
I.displayName = "MonitorArrowUp";
export {
  I as MonitorArrowUp
};
