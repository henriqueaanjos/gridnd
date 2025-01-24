var i = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var n = (r, e, o) => e in r ? i(r, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[e] = o, t = (r, e) => {
  for (var o in e || (e = {}))
    s.call(e, o) && n(r, o, e[o]);
  if (a)
    for (var o of a(e))
      c.call(e, o) && n(r, o, e[o]);
  return r;
}, m = (r, e) => f(r, p(e));
import d, { forwardRef as y } from "react";
import N from "../lib/IconBase.mjs";
import b from "../defs/GenderNonbinary.mjs";
const l = y((r, e) => /* @__PURE__ */ d.createElement(N, m(t({ ref: e }, r), { weights: b })));
l.displayName = "GenderNonbinary";
export {
  l as GenderNonbinary
};
