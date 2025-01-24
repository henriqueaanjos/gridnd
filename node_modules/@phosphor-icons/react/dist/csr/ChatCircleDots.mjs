var s = Object.defineProperty, c = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var a = (e, t, o) => t in e ? s(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[t] = o, m = (e, t) => {
  for (var o in t || (t = {}))
    p.call(t, o) && a(e, o, t[o]);
  if (r)
    for (var o of r(t))
      l.call(t, o) && a(e, o, t[o]);
  return e;
}, i = (e, t) => c(e, f(t));
import C, { forwardRef as h } from "react";
import n from "../lib/IconBase.mjs";
import d from "../defs/ChatCircleDots.mjs";
const w = h((e, t) => /* @__PURE__ */ C.createElement(n, i(m({ ref: t }, e), { weights: d })));
w.displayName = "ChatCircleDots";
export {
  w as ChatCircleDots
};
