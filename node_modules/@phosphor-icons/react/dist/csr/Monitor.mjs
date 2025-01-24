var f = Object.defineProperty, n = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var e = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var m = (r, o, t) => o in r ? f(r, o, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[o] = t, a = (r, o) => {
  for (var t in o || (o = {}))
    s.call(o, t) && m(r, t, o[t]);
  if (e)
    for (var t of e(o))
      c.call(o, t) && m(r, t, o[t]);
  return r;
}, i = (r, o) => n(r, p(o));
import d, { forwardRef as l } from "react";
import w from "../lib/IconBase.mjs";
import I from "../defs/Monitor.mjs";
const M = l((r, o) => /* @__PURE__ */ d.createElement(w, i(a({ ref: o }, r), { weights: I })));
M.displayName = "Monitor";
export {
  M as Monitor
};
