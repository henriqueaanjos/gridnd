var s = Object.defineProperty, l = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var h = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var a = (e, t, o) => t in e ? s(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[t] = o, m = (e, t) => {
  for (var o in t || (t = {}))
    h.call(t, o) && a(e, o, t[o]);
  if (r)
    for (var o of r(t))
      p.call(t, o) && a(e, o, t[o]);
  return e;
}, i = (e, t) => l(e, f(t));
import c, { forwardRef as g } from "react";
import n from "../lib/IconBase.mjs";
import d from "../defs/Flashlight.mjs";
const w = g((e, t) => /* @__PURE__ */ c.createElement(n, i(m({ ref: t }, e), { weights: d })));
w.displayName = "Flashlight";
export {
  w as Flashlight
};
