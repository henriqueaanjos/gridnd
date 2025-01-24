var p = Object.defineProperty, c = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var i = (e, r, o) => r in e ? p(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o, t = (e, r) => {
  for (var o in r || (r = {}))
    s.call(r, o) && i(e, o, r[o]);
  if (a)
    for (var o of a(r))
      d.call(r, o) && i(e, o, r[o]);
  return e;
}, m = (e, r) => c(e, f(r));
import l, { forwardRef as w } from "react";
import S from "../lib/SSRBase.mjs";
import R from "../defs/SkipForwardCircle.mjs";
const k = w((e, r) => /* @__PURE__ */ l.createElement(S, m(t({ ref: r }, e), { weights: R })));
k.displayName = "SkipForwardCircle";
export {
  k as SkipForwardCircle
};
