var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, w = Object.prototype.propertyIsEnumerable;
var a = (r, e, o) => e in r ? i(r, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[e] = o, m = (r, e) => {
  for (var o in e || (e = {}))
    c.call(e, o) && a(r, o, e[o]);
  if (t)
    for (var o of t(e))
      w.call(e, o) && a(r, o, e[o]);
  return r;
}, f = (r, e) => p(r, s(e));
import h, { forwardRef as n } from "react";
import N from "../lib/IconBase.mjs";
import d from "../defs/ShareNetwork.mjs";
const k = n((r, e) => /* @__PURE__ */ h.createElement(N, f(m({ ref: e }, r), { weights: d })));
k.displayName = "ShareNetwork";
export {
  k as ShareNetwork
};
