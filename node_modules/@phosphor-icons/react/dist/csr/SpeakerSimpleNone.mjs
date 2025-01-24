var i = Object.defineProperty, f = Object.defineProperties;
var n = Object.getOwnPropertyDescriptors;
var m = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var a = (o, e, r) => e in o ? i(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, p = (o, e) => {
  for (var r in e || (e = {}))
    s.call(e, r) && a(o, r, e[r]);
  if (m)
    for (var r of m(e))
      c.call(e, r) && a(o, r, e[r]);
  return o;
}, t = (o, e) => f(o, n(e));
import l, { forwardRef as S } from "react";
import N from "../lib/IconBase.mjs";
import d from "../defs/SpeakerSimpleNone.mjs";
const k = S((o, e) => /* @__PURE__ */ l.createElement(N, t(p({ ref: e }, o), { weights: d })));
k.displayName = "SpeakerSimpleNone";
export {
  k as SpeakerSimpleNone
};
