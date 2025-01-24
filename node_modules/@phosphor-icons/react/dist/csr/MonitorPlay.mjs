var f = Object.defineProperty, n = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var e = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var a = (r, o, t) => o in r ? f(r, o, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[o] = t, m = (r, o) => {
  for (var t in o || (o = {}))
    s.call(o, t) && a(r, t, o[t]);
  if (e)
    for (var t of e(o))
      c.call(o, t) && a(r, t, o[t]);
  return r;
}, i = (r, o) => n(r, p(o));
import l, { forwardRef as y } from "react";
import d from "../lib/IconBase.mjs";
import w from "../defs/MonitorPlay.mjs";
const I = y((r, o) => /* @__PURE__ */ l.createElement(d, i(m({ ref: o }, r), { weights: w })));
I.displayName = "MonitorPlay";
export {
  I as MonitorPlay
};
