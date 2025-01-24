var p = Object.defineProperty, c = Object.defineProperties;
var l = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var f = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var o = (r, e, t) => e in r ? p(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t, i = (r, e) => {
  for (var t in e || (e = {}))
    f.call(e, t) && o(r, t, e[t]);
  if (a)
    for (var t of a(e))
      s.call(e, t) && o(r, t, e[t]);
  return r;
}, m = (r, e) => c(r, l(e));
import S, { forwardRef as n } from "react";
import d from "../lib/IconBase.mjs";
import q from "../defs/SquareSplitVertical.mjs";
const u = n((r, e) => /* @__PURE__ */ S.createElement(d, m(i({ ref: e }, r), { weights: q })));
u.displayName = "SquareSplitVertical";
export {
  u as SquareSplitVertical
};
