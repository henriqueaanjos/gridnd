var s = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var i = Object.getOwnPropertySymbols;
var d = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var o = (t, r, e) => r in t ? s(t, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[r] = e, m = (t, r) => {
  for (var e in r || (r = {}))
    d.call(r, e) && o(t, e, r[e]);
  if (i)
    for (var e of i(r))
      c.call(r, e) && o(t, e, r[e]);
  return t;
}, a = (t, r) => f(t, p(r));
import R, { forwardRef as l } from "react";
import n from "../lib/SSRBase.mjs";
import w from "../defs/FirstAid.mjs";
const A = l((t, r) => /* @__PURE__ */ R.createElement(n, a(m({ ref: r }, t), { weights: w })));
A.displayName = "FirstAid";
export {
  A as FirstAid
};
