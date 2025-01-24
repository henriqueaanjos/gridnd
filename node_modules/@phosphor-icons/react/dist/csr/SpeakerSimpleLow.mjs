var i = Object.defineProperty, f = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var m = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var a = (o, e, r) => e in o ? i(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, p = (o, e) => {
  for (var r in e || (e = {}))
    c.call(e, r) && a(o, r, e[r]);
  if (m)
    for (var r of m(e))
      l.call(e, r) && a(o, r, e[r]);
  return o;
}, t = (o, e) => f(o, s(e));
import w, { forwardRef as S } from "react";
import n from "../lib/IconBase.mjs";
import d from "../defs/SpeakerSimpleLow.mjs";
const k = S((o, e) => /* @__PURE__ */ w.createElement(n, t(p({ ref: e }, o), { weights: d })));
k.displayName = "SpeakerSimpleLow";
export {
  k as SpeakerSimpleLow
};
