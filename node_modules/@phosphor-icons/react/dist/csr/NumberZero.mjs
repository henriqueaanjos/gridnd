var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var m = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var t = (r, e, o) => e in r ? i(r, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[e] = o, a = (r, e) => {
  for (var o in e || (e = {}))
    c.call(e, o) && t(r, o, e[o]);
  if (m)
    for (var o of m(e))
      n.call(e, o) && t(r, o, e[o]);
  return r;
}, f = (r, e) => p(r, s(e));
import N, { forwardRef as b } from "react";
import d from "../lib/IconBase.mjs";
import l from "../defs/NumberZero.mjs";
const u = b((r, e) => /* @__PURE__ */ N.createElement(d, f(a({ ref: e }, r), { weights: l })));
u.displayName = "NumberZero";
export {
  u as NumberZero
};
