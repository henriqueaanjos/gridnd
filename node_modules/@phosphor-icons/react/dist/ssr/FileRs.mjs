var s = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var R = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var m = (r, e, o) => e in r ? s(r, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[e] = o, a = (r, e) => {
  for (var o in e || (e = {}))
    R.call(e, o) && m(r, o, e[o]);
  if (t)
    for (var o of t(e))
      l.call(e, o) && m(r, o, e[o]);
  return r;
}, i = (r, e) => f(r, p(e));
import c, { forwardRef as d } from "react";
import n from "../lib/SSRBase.mjs";
import w from "../defs/FileRs.mjs";
const F = d((r, e) => /* @__PURE__ */ c.createElement(n, i(a({ ref: e }, r), { weights: w })));
F.displayName = "FileRs";
export {
  F as FileRs
};
