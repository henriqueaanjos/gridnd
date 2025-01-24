var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, h = Object.prototype.propertyIsEnumerable;
var a = (e, t, o) => t in e ? i(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[t] = o, m = (e, t) => {
  for (var o in t || (t = {}))
    c.call(t, o) && a(e, o, t[o]);
  if (r)
    for (var o of r(t))
      h.call(t, o) && a(e, o, t[o]);
  return e;
}, f = (e, t) => p(e, s(t));
import n, { forwardRef as d } from "react";
import l from "../lib/IconBase.mjs";
import w from "../defs/Chat.mjs";
const C = d((e, t) => /* @__PURE__ */ n.createElement(l, f(m({ ref: t }, e), { weights: w })));
C.displayName = "Chat";
export {
  C as Chat
};
