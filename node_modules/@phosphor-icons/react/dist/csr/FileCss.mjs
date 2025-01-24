var i = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var s = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var t = (o, e, r) => e in o ? i(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, m = (o, e) => {
  for (var r in e || (e = {}))
    c.call(e, r) && t(o, r, e[r]);
  if (s)
    for (var r of s(e))
      l.call(e, r) && t(o, r, e[r]);
  return o;
}, a = (o, e) => f(o, p(e));
import n, { forwardRef as d } from "react";
import w from "../lib/IconBase.mjs";
import C from "../defs/FileCss.mjs";
const F = d((o, e) => /* @__PURE__ */ n.createElement(w, a(m({ ref: e }, o), { weights: C })));
F.displayName = "FileCss";
export {
  F as FileCss
};
