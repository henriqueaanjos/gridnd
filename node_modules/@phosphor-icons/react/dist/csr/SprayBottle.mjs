var f = Object.defineProperty, i = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var a = (e, t, o) => t in e ? f(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[t] = o, m = (e, t) => {
  for (var o in t || (t = {}))
    c.call(t, o) && a(e, o, t[o]);
  if (r)
    for (var o of r(t))
      l.call(t, o) && a(e, o, t[o]);
  return e;
}, p = (e, t) => i(e, s(t));
import n, { forwardRef as y } from "react";
import B from "../lib/IconBase.mjs";
import d from "../defs/SprayBottle.mjs";
const w = y((e, t) => /* @__PURE__ */ n.createElement(B, p(m({ ref: t }, e), { weights: d })));
w.displayName = "SprayBottle";
export {
  w as SprayBottle
};
