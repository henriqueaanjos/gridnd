var s = Object.defineProperty, f = Object.defineProperties;
var n = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var a = (e, t, o) => t in e ? s(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[t] = o, m = (e, t) => {
  for (var o in t || (t = {}))
    p.call(t, o) && a(e, o, t[o]);
  if (r)
    for (var o of r(t))
      c.call(t, o) && a(e, o, t[o]);
  return e;
}, i = (e, t) => f(e, n(t));
import d, { forwardRef as l } from "react";
import w from "../lib/IconBase.mjs";
import F from "../defs/HandFist.mjs";
const H = l((e, t) => /* @__PURE__ */ d.createElement(w, i(m({ ref: t }, e), { weights: F })));
H.displayName = "HandFist";
export {
  H as HandFist
};
