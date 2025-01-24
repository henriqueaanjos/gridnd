var c = Object.defineProperty, f = Object.defineProperties;
var i = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, R = Object.prototype.propertyIsEnumerable;
var o = (e, t, r) => t in e ? c(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, m = (e, t) => {
  for (var r in t || (t = {}))
    p.call(t, r) && o(e, r, t[r]);
  if (a)
    for (var r of a(t))
      R.call(t, r) && o(e, r, t[r]);
  return e;
}, s = (e, t) => f(e, i(t));
import d, { forwardRef as l } from "react";
import n from "../lib/SSRBase.mjs";
import u from "../defs/Cactus.mjs";
const w = l((e, t) => /* @__PURE__ */ d.createElement(n, s(m({ ref: t }, e), { weights: u })));
w.displayName = "Cactus";
export {
  w as Cactus
};
