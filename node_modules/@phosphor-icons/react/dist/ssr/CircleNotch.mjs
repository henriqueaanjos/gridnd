var i = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var m = (r, e, o) => e in r ? i(r, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[e] = o, a = (r, e) => {
  for (var o in e || (e = {}))
    s.call(e, o) && m(r, o, e[o]);
  if (t)
    for (var o of t(e))
      l.call(e, o) && m(r, o, e[o]);
  return r;
}, c = (r, e) => f(r, p(e));
import h, { forwardRef as N } from "react";
import R from "../lib/SSRBase.mjs";
import d from "../defs/CircleNotch.mjs";
const n = N((r, e) => /* @__PURE__ */ h.createElement(R, c(a({ ref: e }, r), { weights: d })));
n.displayName = "CircleNotch";
export {
  n as CircleNotch
};
