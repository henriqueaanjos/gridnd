var f = Object.defineProperty, s = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var i = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var o = (e, t, r) => t in e ? f(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, m = (e, t) => {
  for (var r in t || (t = {}))
    l.call(t, r) && o(e, r, t[r]);
  if (i)
    for (var r of i(t))
      n.call(t, r) && o(e, r, t[r]);
  return e;
}, a = (e, t) => s(e, p(t));
import c, { forwardRef as g } from "react";
import x from "../lib/SSRBase.mjs";
import y from "../defs/TextAlignJustify.mjs";
const R = g((e, t) => /* @__PURE__ */ c.createElement(x, a(m({ ref: t }, e), { weights: y })));
R.displayName = "TextAlignJustify";
export {
  R as TextAlignJustify
};
