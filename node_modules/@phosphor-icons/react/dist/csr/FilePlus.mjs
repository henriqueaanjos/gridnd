var s = Object.defineProperty, l = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var m = (o, e, r) => e in o ? s(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, a = (o, e) => {
  for (var r in e || (e = {}))
    p.call(e, r) && m(o, r, e[r]);
  if (t)
    for (var r of t(e))
      c.call(e, r) && m(o, r, e[r]);
  return o;
}, i = (o, e) => l(o, f(e));
import n, { forwardRef as d } from "react";
import u from "../lib/IconBase.mjs";
import w from "../defs/FilePlus.mjs";
const F = d((o, e) => /* @__PURE__ */ n.createElement(u, i(a({ ref: e }, o), { weights: w })));
F.displayName = "FilePlus";
export {
  F as FilePlus
};
