var s = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var e = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var o = (r, t, i) => t in r ? s(r, t, { enumerable: !0, configurable: !0, writable: !0, value: i }) : r[t] = i, m = (r, t) => {
  for (var i in t || (t = {}))
    c.call(t, i) && o(r, i, t[i]);
  if (e)
    for (var i of e(t))
      d.call(t, i) && o(r, i, t[i]);
  return r;
}, a = (r, t) => f(r, p(t));
import n, { forwardRef as l } from "react";
import w from "../lib/IconBase.mjs";
import A from "../defs/FirstAidKit.mjs";
const F = l((r, t) => /* @__PURE__ */ n.createElement(w, a(m({ ref: t }, r), { weights: A })));
F.displayName = "FirstAidKit";
export {
  F as FirstAidKit
};
