var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, h = Object.prototype.propertyIsEnumerable;
var a = (e, t, o) => t in e ? f(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[t] = o, m = (e, t) => {
  for (var o in t || (t = {}))
    s.call(t, o) && a(e, o, t[o]);
  if (r)
    for (var o of r(t))
      h.call(t, o) && a(e, o, t[o]);
  return e;
}, c = (e, t) => i(e, p(t));
import n, { forwardRef as d } from "react";
import l from "../lib/IconBase.mjs";
import w from "../defs/Watch.mjs";
const I = d((e, t) => /* @__PURE__ */ n.createElement(l, c(m({ ref: t }, e), { weights: w })));
I.displayName = "Watch";
export {
  I as Watch
};
