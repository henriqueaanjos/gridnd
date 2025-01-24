var c = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var t = (o, e, r) => e in o ? c(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, m = (o, e) => {
  for (var r in e || (e = {}))
    s.call(e, r) && t(o, r, e[r]);
  if (a)
    for (var r of a(e))
      l.call(e, r) && t(o, r, e[r]);
  return o;
}, i = (o, e) => f(o, p(e));
import n, { forwardRef as d } from "react";
import w from "../lib/IconBase.mjs";
import C from "../defs/PoliceCar.mjs";
const I = d((o, e) => /* @__PURE__ */ n.createElement(w, i(m({ ref: e }, o), { weights: C })));
I.displayName = "PoliceCar";
export {
  I as PoliceCar
};
