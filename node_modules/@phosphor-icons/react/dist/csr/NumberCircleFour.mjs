var c = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var m = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var t = (e, r, o) => r in e ? c(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o, a = (e, r) => {
  for (var o in r || (r = {}))
    s.call(r, o) && t(e, o, r[o]);
  if (m)
    for (var o of m(r))
      l.call(r, o) && t(e, o, r[o]);
  return e;
}, i = (e, r) => f(e, p(r));
import u, { forwardRef as n } from "react";
import N from "../lib/IconBase.mjs";
import b from "../defs/NumberCircleFour.mjs";
const d = n((e, r) => /* @__PURE__ */ u.createElement(N, i(a({ ref: r }, e), { weights: b })));
d.displayName = "NumberCircleFour";
export {
  d as NumberCircleFour
};
