var f = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var e = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var a = (r, o, t) => o in r ? f(r, o, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[o] = t, m = (r, o) => {
  for (var t in o || (o = {}))
    l.call(o, t) && a(r, t, o[t]);
  if (e)
    for (var t of e(o))
      n.call(o, t) && a(r, t, o[t]);
  return r;
}, i = (r, o) => p(r, s(o));
import c, { forwardRef as y } from "react";
import R from "../lib/SSRBase.mjs";
import d from "../defs/MonitorPlay.mjs";
const w = y((r, o) => /* @__PURE__ */ c.createElement(R, i(m({ ref: o }, r), { weights: d })));
w.displayName = "MonitorPlay";
export {
  w as MonitorPlay
};
