var c = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var a = (e, t, o) => t in e ? c(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[t] = o, m = (e, t) => {
  for (var o in t || (t = {}))
    s.call(t, o) && a(e, o, t[o]);
  if (r)
    for (var o of r(t))
      l.call(t, o) && a(e, o, t[o]);
  return e;
}, i = (e, t) => f(e, p(t));
import I, { forwardRef as n } from "react";
import x from "../lib/IconBase.mjs";
import d from "../defs/TextItalic.mjs";
const w = n((e, t) => /* @__PURE__ */ I.createElement(x, i(m({ ref: t }, e), { weights: d })));
w.displayName = "TextItalic";
export {
  w as TextItalic
};
