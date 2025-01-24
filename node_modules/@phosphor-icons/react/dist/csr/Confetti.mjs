var i = Object.defineProperty, n = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var m = (e, t, o) => t in e ? i(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[t] = o, a = (e, t) => {
  for (var o in t || (t = {}))
    s.call(t, o) && m(e, o, t[o]);
  if (r)
    for (var o of r(t))
      c.call(t, o) && m(e, o, t[o]);
  return e;
}, f = (e, t) => n(e, p(t));
import d, { forwardRef as l } from "react";
import w from "../lib/IconBase.mjs";
import C from "../defs/Confetti.mjs";
const I = l((e, t) => /* @__PURE__ */ d.createElement(w, f(a({ ref: t }, e), { weights: C })));
I.displayName = "Confetti";
export {
  I as Confetti
};
