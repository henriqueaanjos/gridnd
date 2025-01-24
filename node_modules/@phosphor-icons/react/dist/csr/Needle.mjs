var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var m = (o, e, r) => e in o ? i(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, a = (o, e) => {
  for (var r in e || (e = {}))
    c.call(e, r) && m(o, r, e[r]);
  if (t)
    for (var r of t(e))
      d.call(e, r) && m(o, r, e[r]);
  return o;
}, f = (o, e) => p(o, s(e));
import l, { forwardRef as n } from "react";
import N from "../lib/IconBase.mjs";
import w from "../defs/Needle.mjs";
const I = n((o, e) => /* @__PURE__ */ l.createElement(N, f(a({ ref: e }, o), { weights: w })));
I.displayName = "Needle";
export {
  I as Needle
};
