var s = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var m = (e, t, o) => t in e ? s(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[t] = o, a = (e, t) => {
  for (var o in t || (t = {}))
    c.call(t, o) && m(e, o, t[o]);
  if (r)
    for (var o of r(t))
      n.call(t, o) && m(e, o, t[o]);
  return e;
}, i = (e, t) => f(e, p(t));
import d, { forwardRef as l } from "react";
import w from "../lib/IconBase.mjs";
import I from "../defs/List.mjs";
const L = l((e, t) => /* @__PURE__ */ d.createElement(w, i(a({ ref: t }, e), { weights: I })));
L.displayName = "List";
export {
  L as List
};
