var f = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var m = (o, e, r) => e in o ? f(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, a = (o, e) => {
  for (var r in e || (e = {}))
    c.call(e, r) && m(o, r, e[r]);
  if (t)
    for (var r of t(e))
      l.call(e, r) && m(o, r, e[r]);
  return o;
}, i = (o, e) => p(o, s(e));
import n, { forwardRef as y } from "react";
import d from "../lib/IconBase.mjs";
import w from "../defs/FilePy.mjs";
const F = y((o, e) => /* @__PURE__ */ n.createElement(d, i(a({ ref: e }, o), { weights: w })));
F.displayName = "FilePy";
export {
  F as FilePy
};
