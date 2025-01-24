var n = Object.defineProperty, s = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var g = Object.prototype.hasOwnProperty, h = Object.prototype.propertyIsEnumerable;
var a = (e, t, o) => t in e ? n(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[t] = o, i = (e, t) => {
  for (var o in t || (t = {}))
    g.call(t, o) && a(e, o, t[o]);
  if (r)
    for (var o of r(t))
      h.call(t, o) && a(e, o, t[o]);
  return e;
}, m = (e, t) => s(e, f(t));
import p, { forwardRef as c } from "react";
import l from "../lib/IconBase.mjs";
import d from "../defs/LightningSlash.mjs";
const w = c((e, t) => /* @__PURE__ */ p.createElement(l, m(i({ ref: t }, e), { weights: d })));
w.displayName = "LightningSlash";
export {
  w as LightningSlash
};
