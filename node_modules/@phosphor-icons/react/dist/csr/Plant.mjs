var i = Object.defineProperty, n = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var a = (e, t, o) => t in e ? i(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[t] = o, m = (e, t) => {
  for (var o in t || (t = {}))
    s.call(t, o) && a(e, o, t[o]);
  if (r)
    for (var o of r(t))
      c.call(t, o) && a(e, o, t[o]);
  return e;
}, f = (e, t) => n(e, p(t));
import l, { forwardRef as d } from "react";
import w from "../lib/IconBase.mjs";
import I from "../defs/Plant.mjs";
const P = d((e, t) => /* @__PURE__ */ l.createElement(w, f(m({ ref: t }, e), { weights: I })));
P.displayName = "Plant";
export {
  P as Plant
};
