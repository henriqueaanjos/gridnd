var f = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var b = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var a = (e, t, o) => t in e ? f(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[t] = o, m = (e, t) => {
  for (var o in t || (t = {}))
    b.call(t, o) && a(e, o, t[o]);
  if (r)
    for (var o of r(t))
      c.call(t, o) && a(e, o, t[o]);
  return e;
}, i = (e, t) => p(e, s(t));
import R, { forwardRef as n } from "react";
import d from "../lib/IconBase.mjs";
import l from "../defs/Rabbit.mjs";
const w = n((e, t) => /* @__PURE__ */ R.createElement(d, i(m({ ref: t }, e), { weights: l })));
w.displayName = "Rabbit";
export {
  w as Rabbit
};
