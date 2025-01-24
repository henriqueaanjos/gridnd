var s = Object.defineProperty, f = Object.defineProperties;
var n = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var i = (e, t, o) => t in e ? s(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[t] = o, m = (e, t) => {
  for (var o in t || (t = {}))
    p.call(t, o) && i(e, o, t[o]);
  if (r)
    for (var o of r(t))
      c.call(t, o) && i(e, o, t[o]);
  return e;
}, a = (e, t) => f(e, n(t));
import I, { forwardRef as h } from "react";
import b from "../lib/IconBase.mjs";
import d from "../defs/ProhibitInset.mjs";
const l = h((e, t) => /* @__PURE__ */ I.createElement(b, a(m({ ref: t }, e), { weights: d })));
l.displayName = "ProhibitInset";
export {
  l as ProhibitInset
};
