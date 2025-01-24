var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var s = (r, o, e) => o in r ? f(r, o, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[o] = e, t = (r, o) => {
  for (var e in o || (o = {}))
    c.call(o, e) && s(r, e, o[e]);
  if (a)
    for (var e of a(o))
      l.call(o, e) && s(r, e, o[e]);
  return r;
}, m = (r, o) => i(r, p(o));
import w, { forwardRef as g } from "react";
import n from "../lib/IconBase.mjs";
import d from "../defs/HourglassLow.mjs";
const u = g((r, o) => /* @__PURE__ */ w.createElement(n, m(t({ ref: o }, r), { weights: d })));
u.displayName = "HourglassLow";
export {
  u as HourglassLow
};
