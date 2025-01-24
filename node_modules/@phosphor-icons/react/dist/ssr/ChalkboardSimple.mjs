var p = Object.defineProperty, l = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var m = (r, e, a) => e in r ? p(r, e, { enumerable: !0, configurable: !0, writable: !0, value: a }) : r[e] = a, t = (r, e) => {
  for (var a in e || (e = {}))
    s.call(e, a) && m(r, a, e[a]);
  if (o)
    for (var a of o(e))
      d.call(e, a) && m(r, a, e[a]);
  return r;
}, i = (r, e) => l(r, f(e));
import S, { forwardRef as c } from "react";
import h from "../lib/SSRBase.mjs";
import R from "../defs/ChalkboardSimple.mjs";
const b = c((r, e) => /* @__PURE__ */ S.createElement(h, i(t({ ref: e }, r), { weights: R })));
b.displayName = "ChalkboardSimple";
export {
  b as ChalkboardSimple
};
