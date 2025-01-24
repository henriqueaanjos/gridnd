var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, S = Object.prototype.propertyIsEnumerable;
var o = (e, t, r) => t in e ? f(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, m = (e, t) => {
  for (var r in t || (t = {}))
    s.call(t, r) && o(e, r, t[r]);
  if (a)
    for (var r of a(t))
      S.call(t, r) && o(e, r, t[r]);
  return e;
}, c = (e, t) => i(e, p(t));
import R, { forwardRef as d } from "react";
import k from "../lib/SSRBase.mjs";
import l from "../defs/Stack.mjs";
const n = d((e, t) => /* @__PURE__ */ R.createElement(k, c(m({ ref: t }, e), { weights: l })));
n.displayName = "Stack";
export {
  n as Stack
};
