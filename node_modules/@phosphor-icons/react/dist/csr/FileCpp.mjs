var i = Object.defineProperty, f = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var p = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var t = (o, e, r) => e in o ? i(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, m = (o, e) => {
  for (var r in e || (e = {}))
    c.call(e, r) && t(o, r, e[r]);
  if (p)
    for (var r of p(e))
      l.call(e, r) && t(o, r, e[r]);
  return o;
}, a = (o, e) => f(o, s(e));
import n, { forwardRef as d } from "react";
import w from "../lib/IconBase.mjs";
import C from "../defs/FileCpp.mjs";
const F = d((o, e) => /* @__PURE__ */ n.createElement(w, a(m({ ref: e }, o), { weights: C })));
F.displayName = "FileCpp";
export {
  F as FileCpp
};
