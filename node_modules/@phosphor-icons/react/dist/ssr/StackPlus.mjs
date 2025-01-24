var c = Object.defineProperty, f = Object.defineProperties;
var i = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var o = (e, t, r) => t in e ? c(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, m = (e, t) => {
  for (var r in t || (t = {}))
    p.call(t, r) && o(e, r, t[r]);
  if (a)
    for (var r of a(t))
      l.call(t, r) && o(e, r, t[r]);
  return e;
}, s = (e, t) => f(e, i(t));
import S, { forwardRef as R } from "react";
import d from "../lib/SSRBase.mjs";
import k from "../defs/StackPlus.mjs";
const n = R((e, t) => /* @__PURE__ */ S.createElement(d, s(m({ ref: t }, e), { weights: k })));
n.displayName = "StackPlus";
export {
  n as StackPlus
};
