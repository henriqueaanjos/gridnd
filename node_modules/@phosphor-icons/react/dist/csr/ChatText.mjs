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
import n, { forwardRef as x } from "react";
import d from "../lib/IconBase.mjs";
import l from "../defs/ChatText.mjs";
const w = x((e, t) => /* @__PURE__ */ n.createElement(d, f(m({ ref: t }, e), { weights: l })));
w.displayName = "ChatText";
export {
  w as ChatText
};
