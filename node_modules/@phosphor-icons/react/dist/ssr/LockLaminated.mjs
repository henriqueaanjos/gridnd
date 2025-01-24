var c = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var m = (a, e, o) => e in a ? c(a, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : a[e] = o, r = (a, e) => {
  for (var o in e || (e = {}))
    s.call(e, o) && m(a, o, e[o]);
  if (t)
    for (var o of t(e))
      d.call(e, o) && m(a, o, e[o]);
  return a;
}, i = (a, e) => f(a, p(e));
import n, { forwardRef as L } from "react";
import R from "../lib/SSRBase.mjs";
import k from "../defs/LockLaminated.mjs";
const l = L((a, e) => /* @__PURE__ */ n.createElement(R, i(r({ ref: e }, a), { weights: k })));
l.displayName = "LockLaminated";
export {
  l as LockLaminated
};
