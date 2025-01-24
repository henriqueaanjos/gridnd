var f = Object.defineProperty, s = Object.defineProperties;
var n = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var i = (e, t, o) => t in e ? f(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[t] = o, m = (e, t) => {
  for (var o in t || (t = {}))
    p.call(t, o) && i(e, o, t[o]);
  if (r)
    for (var o of r(t))
      c.call(t, o) && i(e, o, t[o]);
  return e;
}, a = (e, t) => s(e, n(t));
import l, { forwardRef as g } from "react";
import x from "../lib/IconBase.mjs";
import y from "../defs/TextAlignJustify.mjs";
const d = g((e, t) => /* @__PURE__ */ l.createElement(x, a(m({ ref: t }, e), { weights: y })));
d.displayName = "TextAlignJustify";
export {
  d as TextAlignJustify
};
