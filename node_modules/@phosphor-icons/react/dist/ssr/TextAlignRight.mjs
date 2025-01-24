var f = Object.defineProperty, g = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var i = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, R = Object.prototype.propertyIsEnumerable;
var o = (e, t, r) => t in e ? f(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, m = (e, t) => {
  for (var r in t || (t = {}))
    s.call(t, r) && o(e, r, t[r]);
  if (i)
    for (var r of i(t))
      R.call(t, r) && o(e, r, t[r]);
  return e;
}, a = (e, t) => g(e, p(t));
import l, { forwardRef as n } from "react";
import c from "../lib/SSRBase.mjs";
import h from "../defs/TextAlignRight.mjs";
const x = n((e, t) => /* @__PURE__ */ l.createElement(c, a(m({ ref: t }, e), { weights: h })));
x.displayName = "TextAlignRight";
export {
  x as TextAlignRight
};
