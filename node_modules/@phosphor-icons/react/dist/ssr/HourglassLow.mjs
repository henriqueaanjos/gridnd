var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, w = Object.prototype.propertyIsEnumerable;
var s = (r, o, e) => o in r ? f(r, o, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[o] = e, t = (r, o) => {
  for (var e in o || (o = {}))
    l.call(o, e) && s(r, e, o[e]);
  if (a)
    for (var e of a(o))
      w.call(o, e) && s(r, e, o[e]);
  return r;
}, m = (r, o) => i(r, p(o));
import c, { forwardRef as g } from "react";
import R from "../lib/SSRBase.mjs";
import d from "../defs/HourglassLow.mjs";
const n = g((r, o) => /* @__PURE__ */ c.createElement(R, m(t({ ref: o }, r), { weights: d })));
n.displayName = "HourglassLow";
export {
  n as HourglassLow
};
