var i = Object.defineProperty, S = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var m = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var a = (r, e, o) => e in r ? i(r, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[e] = o, p = (r, e) => {
  for (var o in e || (e = {}))
    s.call(e, o) && a(r, o, e[o]);
  if (m)
    for (var o of m(e))
      l.call(e, o) && a(r, o, e[o]);
  return r;
}, t = (r, e) => S(r, f(e));
import n, { forwardRef as c } from "react";
import N from "../lib/SSRBase.mjs";
import R from "../defs/SpeakerSimpleNone.mjs";
const d = c((r, e) => /* @__PURE__ */ n.createElement(N, t(p({ ref: e }, r), { weights: R })));
d.displayName = "SpeakerSimpleNone";
export {
  d as SpeakerSimpleNone
};
