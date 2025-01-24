var f = Object.defineProperty, g = Object.defineProperties;
var n = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var i = (e, t, o) => t in e ? f(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[t] = o, m = (e, t) => {
  for (var o in t || (t = {}))
    p.call(t, o) && i(e, o, t[o]);
  if (r)
    for (var o of r(t))
      s.call(t, o) && i(e, o, t[o]);
  return e;
}, a = (e, t) => g(e, n(t));
import c, { forwardRef as l } from "react";
import R from "../lib/IconBase.mjs";
import h from "../defs/TextAlignRight.mjs";
const x = l((e, t) => /* @__PURE__ */ c.createElement(R, a(m({ ref: t }, e), { weights: h })));
x.displayName = "TextAlignRight";
export {
  x as TextAlignRight
};
