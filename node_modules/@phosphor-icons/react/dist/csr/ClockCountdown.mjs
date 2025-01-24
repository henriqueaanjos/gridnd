var c = Object.defineProperty, f = Object.defineProperties;
var i = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var m = (t, o, e) => o in t ? c(t, o, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[o] = e, a = (t, o) => {
  for (var e in o || (o = {}))
    p.call(o, e) && m(t, e, o[e]);
  if (r)
    for (var e of r(o))
      s.call(o, e) && m(t, e, o[e]);
  return t;
}, n = (t, o) => f(t, i(o));
import d, { forwardRef as l } from "react";
import w from "../lib/IconBase.mjs";
import C from "../defs/ClockCountdown.mjs";
const k = l((t, o) => /* @__PURE__ */ d.createElement(w, n(a({ ref: o }, t), { weights: C })));
k.displayName = "ClockCountdown";
export {
  k as ClockCountdown
};
