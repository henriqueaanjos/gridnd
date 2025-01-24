var i = Object.defineProperty, f = Object.defineProperties;
var g = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var s = (r, o, e) => o in r ? i(r, o, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[o] = e, t = (r, o) => {
  for (var e in o || (o = {}))
    p.call(o, e) && s(r, e, o[e]);
  if (a)
    for (var e of a(o))
      c.call(o, e) && s(r, e, o[e]);
  return r;
}, m = (r, o) => f(r, g(o));
import l, { forwardRef as H } from "react";
import h from "../lib/IconBase.mjs";
import n from "../defs/HourglassHigh.mjs";
const d = H((r, o) => /* @__PURE__ */ l.createElement(h, m(t({ ref: o }, r), { weights: n })));
d.displayName = "HourglassHigh";
export {
  d as HourglassHigh
};
