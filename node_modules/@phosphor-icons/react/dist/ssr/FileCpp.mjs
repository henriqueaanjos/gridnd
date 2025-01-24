var i = Object.defineProperty, f = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var p = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var t = (r, e, o) => e in r ? i(r, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[e] = o, m = (r, e) => {
  for (var o in e || (e = {}))
    l.call(e, o) && t(r, o, e[o]);
  if (p)
    for (var o of p(e))
      c.call(e, o) && t(r, o, e[o]);
  return r;
}, a = (r, e) => f(r, s(e));
import R, { forwardRef as d } from "react";
import n from "../lib/SSRBase.mjs";
import w from "../defs/FileCpp.mjs";
const C = d((r, e) => /* @__PURE__ */ R.createElement(n, a(m({ ref: e }, r), { weights: w })));
C.displayName = "FileCpp";
export {
  C as FileCpp
};
