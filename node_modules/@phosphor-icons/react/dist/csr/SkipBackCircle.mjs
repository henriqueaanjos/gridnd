var m = Object.defineProperty, p = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, k = Object.prototype.propertyIsEnumerable;
var i = (r, e, o) => e in r ? m(r, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[e] = o, t = (r, e) => {
  for (var o in e || (e = {}))
    s.call(e, o) && i(r, o, e[o]);
  if (a)
    for (var o of a(e))
      k.call(e, o) && i(r, o, e[o]);
  return r;
}, c = (r, e) => p(r, f(e));
import l, { forwardRef as n } from "react";
import B from "../lib/IconBase.mjs";
import d from "../defs/SkipBackCircle.mjs";
const w = n((r, e) => /* @__PURE__ */ l.createElement(B, c(t({ ref: e }, r), { weights: d })));
w.displayName = "SkipBackCircle";
export {
  w as SkipBackCircle
};
