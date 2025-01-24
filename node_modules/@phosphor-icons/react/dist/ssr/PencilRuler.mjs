var l = Object.defineProperty, c = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var m = (r, e, o) => e in r ? l(r, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[e] = o, a = (r, e) => {
  for (var o in e || (e = {}))
    p.call(e, o) && m(r, o, e[o]);
  if (t)
    for (var o of t(e))
      s.call(e, o) && m(r, o, e[o]);
  return r;
}, i = (r, e) => c(r, f(e));
import R, { forwardRef as n } from "react";
import d from "../lib/SSRBase.mjs";
import u from "../defs/PencilRuler.mjs";
const w = n((r, e) => /* @__PURE__ */ R.createElement(d, i(a({ ref: e }, r), { weights: u })));
w.displayName = "PencilRuler";
export {
  w as PencilRuler
};
