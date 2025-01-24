var i = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var s = (e, t, o) => t in e ? i(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[t] = o, m = (e, t) => {
  for (var o in t || (t = {}))
    c.call(t, o) && s(e, o, t[o]);
  if (r)
    for (var o of r(t))
      l.call(t, o) && s(e, o, t[o]);
  return e;
}, a = (e, t) => f(e, p(t));
import n, { forwardRef as d } from "react";
import u from "../lib/IconBase.mjs";
import w from "../defs/ListPlus.mjs";
const I = d((e, t) => /* @__PURE__ */ n.createElement(u, a(m({ ref: t }, e), { weights: w })));
I.displayName = "ListPlus";
export {
  I as ListPlus
};
