var f = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var m = (r, e, o) => e in r ? f(r, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[e] = o, a = (r, e) => {
  for (var o in e || (e = {}))
    l.call(e, o) && m(r, o, e[o]);
  if (t)
    for (var o of t(e))
      n.call(e, o) && m(r, o, e[o]);
  return r;
}, i = (r, e) => p(r, s(e));
import w, { forwardRef as c } from "react";
import h from "../lib/SSRBase.mjs";
import R from "../defs/Pinwheel.mjs";
const d = c((r, e) => /* @__PURE__ */ w.createElement(h, i(a({ ref: e }, r), { weights: R })));
d.displayName = "Pinwheel";
export {
  d as Pinwheel
};
