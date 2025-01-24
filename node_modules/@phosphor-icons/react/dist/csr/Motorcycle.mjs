var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var c = (e, o, r) => o in e ? f(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, m = (e, o) => {
  for (var r in o || (o = {}))
    s.call(o, r) && c(e, r, o[r]);
  if (t)
    for (var r of t(o))
      l.call(o, r) && c(e, r, o[r]);
  return e;
}, a = (e, o) => i(e, p(o));
import n, { forwardRef as y } from "react";
import d from "../lib/IconBase.mjs";
import w from "../defs/Motorcycle.mjs";
const I = y((e, o) => /* @__PURE__ */ n.createElement(d, a(m({ ref: o }, e), { weights: w })));
I.displayName = "Motorcycle";
export {
  I as Motorcycle
};
