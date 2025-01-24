var d = Object.defineProperty, c = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var h = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var m = (r, e, o) => e in r ? d(r, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[e] = o, a = (r, e) => {
  for (var o in e || (e = {}))
    h.call(e, o) && m(r, o, e[o]);
  if (t)
    for (var o of t(e))
      p.call(e, o) && m(r, o, e[o]);
  return r;
}, i = (r, e) => c(r, f(e));
import s, { forwardRef as l } from "react";
import S from "../lib/SSRBase.mjs";
import R from "../defs/ShieldCheckered.mjs";
const k = l((r, e) => /* @__PURE__ */ s.createElement(S, i(a({ ref: e }, r), { weights: R })));
k.displayName = "ShieldCheckered";
export {
  k as ShieldCheckered
};
