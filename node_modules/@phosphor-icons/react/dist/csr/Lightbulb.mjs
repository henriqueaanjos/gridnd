var f = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var b = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var m = (e, t, o) => t in e ? f(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[t] = o, a = (e, t) => {
  for (var o in t || (t = {}))
    b.call(t, o) && m(e, o, t[o]);
  if (r)
    for (var o of r(t))
      c.call(t, o) && m(e, o, t[o]);
  return e;
}, i = (e, t) => p(e, s(t));
import l, { forwardRef as g } from "react";
import h from "../lib/IconBase.mjs";
import n from "../defs/Lightbulb.mjs";
const d = g((e, t) => /* @__PURE__ */ l.createElement(h, i(a({ ref: t }, e), { weights: n })));
d.displayName = "Lightbulb";
export {
  d as Lightbulb
};
