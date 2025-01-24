var s = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var e = Object.getOwnPropertySymbols;
var d = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var o = (r, t, i) => t in r ? s(r, t, { enumerable: !0, configurable: !0, writable: !0, value: i }) : r[t] = i, m = (r, t) => {
  for (var i in t || (t = {}))
    d.call(t, i) && o(r, i, t[i]);
  if (e)
    for (var i of e(t))
      c.call(t, i) && o(r, i, t[i]);
  return r;
}, a = (r, t) => f(r, p(t));
import R, { forwardRef as l } from "react";
import n from "../lib/SSRBase.mjs";
import w from "../defs/FirstAidKit.mjs";
const A = l((r, t) => /* @__PURE__ */ R.createElement(n, a(m({ ref: t }, r), { weights: w })));
A.displayName = "FirstAidKit";
export {
  A as FirstAidKit
};
