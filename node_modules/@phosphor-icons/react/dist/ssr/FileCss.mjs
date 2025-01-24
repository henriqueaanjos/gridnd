var i = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var s = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var t = (r, e, o) => e in r ? i(r, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[e] = o, m = (r, e) => {
  for (var o in e || (e = {}))
    l.call(e, o) && t(r, o, e[o]);
  if (s)
    for (var o of s(e))
      c.call(e, o) && t(r, o, e[o]);
  return r;
}, a = (r, e) => f(r, p(e));
import R, { forwardRef as d } from "react";
import n from "../lib/SSRBase.mjs";
import w from "../defs/FileCss.mjs";
const C = d((r, e) => /* @__PURE__ */ R.createElement(n, a(m({ ref: e }, r), { weights: w })));
C.displayName = "FileCss";
export {
  C as FileCss
};
