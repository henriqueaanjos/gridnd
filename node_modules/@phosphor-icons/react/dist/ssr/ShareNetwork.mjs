var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var w = Object.prototype.hasOwnProperty, S = Object.prototype.propertyIsEnumerable;
var a = (r, e, o) => e in r ? i(r, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[e] = o, m = (r, e) => {
  for (var o in e || (e = {}))
    w.call(e, o) && a(r, o, e[o]);
  if (t)
    for (var o of t(e))
      S.call(e, o) && a(r, o, e[o]);
  return r;
}, f = (r, e) => p(r, s(e));
import c, { forwardRef as h } from "react";
import N from "../lib/SSRBase.mjs";
import R from "../defs/ShareNetwork.mjs";
const d = h((r, e) => /* @__PURE__ */ c.createElement(N, f(m({ ref: e }, r), { weights: R })));
d.displayName = "ShareNetwork";
export {
  d as ShareNetwork
};
