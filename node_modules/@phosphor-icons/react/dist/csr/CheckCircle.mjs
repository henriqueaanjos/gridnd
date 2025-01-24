var i = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var c = (r, e, o) => e in r ? i(r, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[e] = o, m = (r, e) => {
  for (var o in e || (e = {}))
    s.call(e, o) && c(r, o, e[o]);
  if (t)
    for (var o of t(e))
      l.call(e, o) && c(r, o, e[o]);
  return r;
}, a = (r, e) => f(r, p(e));
import C, { forwardRef as h } from "react";
import n from "../lib/IconBase.mjs";
import d from "../defs/CheckCircle.mjs";
const k = h((r, e) => /* @__PURE__ */ C.createElement(n, a(m({ ref: e }, r), { weights: d })));
k.displayName = "CheckCircle";
export {
  k as CheckCircle
};
