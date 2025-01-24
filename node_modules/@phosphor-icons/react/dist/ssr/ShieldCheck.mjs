var c = Object.defineProperty, f = Object.defineProperties;
var h = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var m = (r, e, o) => e in r ? c(r, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[e] = o, a = (r, e) => {
  for (var o in e || (e = {}))
    p.call(e, o) && m(r, o, e[o]);
  if (t)
    for (var o of t(e))
      s.call(e, o) && m(r, o, e[o]);
  return r;
}, i = (r, e) => f(r, h(e));
import d, { forwardRef as l } from "react";
import S from "../lib/SSRBase.mjs";
import R from "../defs/ShieldCheck.mjs";
const k = l((r, e) => /* @__PURE__ */ d.createElement(S, i(a({ ref: e }, r), { weights: R })));
k.displayName = "ShieldCheck";
export {
  k as ShieldCheck
};
