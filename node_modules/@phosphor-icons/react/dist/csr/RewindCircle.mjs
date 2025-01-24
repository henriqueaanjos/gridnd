var c = Object.defineProperty, f = Object.defineProperties;
var n = Object.getOwnPropertyDescriptors;
var i = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var t = (r, e, o) => e in r ? c(r, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[e] = o, m = (r, e) => {
  for (var o in e || (e = {}))
    p.call(e, o) && t(r, o, e[o]);
  if (i)
    for (var o of i(e))
      s.call(e, o) && t(r, o, e[o]);
  return r;
}, a = (r, e) => f(r, n(e));
import d, { forwardRef as l } from "react";
import w from "../lib/IconBase.mjs";
import R from "../defs/RewindCircle.mjs";
const C = l((r, e) => /* @__PURE__ */ d.createElement(w, a(m({ ref: e }, r), { weights: R })));
C.displayName = "RewindCircle";
export {
  C as RewindCircle
};
