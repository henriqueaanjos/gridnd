var c = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var o = (e, t, r) => t in e ? c(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, m = (e, t) => {
  for (var r in t || (t = {}))
    s.call(t, r) && o(e, r, t[r]);
  if (a)
    for (var r of a(t))
      l.call(t, r) && o(e, r, t[r]);
  return e;
}, i = (e, t) => f(e, p(t));
import x, { forwardRef as I } from "react";
import R from "../lib/SSRBase.mjs";
import d from "../defs/TextItalic.mjs";
const n = I((e, t) => /* @__PURE__ */ x.createElement(R, i(m({ ref: t }, e), { weights: d })));
n.displayName = "TextItalic";
export {
  n as TextItalic
};
