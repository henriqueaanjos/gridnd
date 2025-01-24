var t = Object.defineProperty, S = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var i = (r, e, m) => e in r ? t(r, e, { enumerable: !0, configurable: !0, writable: !0, value: m }) : r[e] = m, o = (r, e) => {
  for (var m in e || (e = {}))
    s.call(e, m) && i(r, m, e[m]);
  if (a)
    for (var m of a(e))
      l.call(e, m) && i(r, m, e[m]);
  return r;
}, p = (r, e) => S(r, f(e));
import c, { forwardRef as g } from "react";
import h from "../lib/SSRBase.mjs";
import R from "../defs/SpeakerSimpleHigh.mjs";
const d = g((r, e) => /* @__PURE__ */ c.createElement(h, p(o({ ref: e }, r), { weights: R })));
d.displayName = "SpeakerSimpleHigh";
export {
  d as SpeakerSimpleHigh
};
