var s = Object.defineProperty, l = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var m = (r, e, o) => e in r ? s(r, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[e] = o, a = (r, e) => {
  for (var o in e || (e = {}))
    p.call(e, o) && m(r, o, e[o]);
  if (t)
    for (var o of t(e))
      c.call(e, o) && m(r, o, e[o]);
  return r;
}, i = (r, e) => l(r, f(e));
import R, { forwardRef as d } from "react";
import n from "../lib/SSRBase.mjs";
import w from "../defs/FileXls.mjs";
const F = d((r, e) => /* @__PURE__ */ R.createElement(n, i(a({ ref: e }, r), { weights: w })));
F.displayName = "FileXls";
export {
  F as FileXls
};
