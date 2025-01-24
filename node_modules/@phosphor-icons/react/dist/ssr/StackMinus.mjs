var s = Object.defineProperty, c = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var o = (e, t, r) => t in e ? s(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, m = (e, t) => {
  for (var r in t || (t = {}))
    p.call(t, r) && o(e, r, t[r]);
  if (a)
    for (var r of a(t))
      n.call(t, r) && o(e, r, t[r]);
  return e;
}, i = (e, t) => c(e, f(t));
import S, { forwardRef as R } from "react";
import d from "../lib/SSRBase.mjs";
import k from "../defs/StackMinus.mjs";
const l = R((e, t) => /* @__PURE__ */ S.createElement(d, i(m({ ref: t }, e), { weights: k })));
l.displayName = "StackMinus";
export {
  l as StackMinus
};
