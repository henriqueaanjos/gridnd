var p = Object.defineProperty, f = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var t = (r, e, o) => e in r ? p(r, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[e] = o, m = (r, e) => {
  for (var o in e || (e = {}))
    c.call(e, o) && t(r, o, e[o]);
  if (a)
    for (var o of a(e))
      l.call(e, o) && t(r, o, e[o]);
  return r;
}, i = (r, e) => f(r, s(e));
import h, { forwardRef as n } from "react";
import d from "../lib/IconBase.mjs";
import w from "../defs/FileCSharp.mjs";
const C = n((r, e) => /* @__PURE__ */ h.createElement(d, i(m({ ref: e }, r), { weights: w })));
C.displayName = "FileCSharp";
export {
  C as FileCSharp
};
