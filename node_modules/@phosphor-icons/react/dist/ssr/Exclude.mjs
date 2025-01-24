var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var m = (r, e, o) => e in r ? f(r, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[e] = o, a = (r, e) => {
  for (var o in e || (e = {}))
    s.call(e, o) && m(r, o, e[o]);
  if (t)
    for (var o of t(e))
      d.call(e, o) && m(r, o, e[o]);
  return r;
}, c = (r, e) => i(r, p(e));
import l, { forwardRef as x } from "react";
import E from "../lib/SSRBase.mjs";
import R from "../defs/Exclude.mjs";
const n = x((r, e) => /* @__PURE__ */ l.createElement(E, c(a({ ref: e }, r), { weights: R })));
n.displayName = "Exclude";
export {
  n as Exclude
};
