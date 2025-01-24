var t = Object.defineProperty, f = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var a = (r, e, m) => e in r ? t(r, e, { enumerable: !0, configurable: !0, writable: !0, value: m }) : r[e] = m, i = (r, e) => {
  for (var m in e || (e = {}))
    c.call(e, m) && a(r, m, e[m]);
  if (o)
    for (var m of o(e))
      l.call(e, m) && a(r, m, e[m]);
  return r;
}, p = (r, e) => f(r, s(e));
import S, { forwardRef as g } from "react";
import h from "../lib/IconBase.mjs";
import n from "../defs/SpeakerSimpleHigh.mjs";
const d = g((r, e) => /* @__PURE__ */ S.createElement(h, p(i({ ref: e }, r), { weights: n })));
d.displayName = "SpeakerSimpleHigh";
export {
  d as SpeakerSimpleHigh
};
