var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, R = Object.prototype.propertyIsEnumerable;
var m = (e, t, r) => t in e ? i(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, a = (e, t) => {
  for (var r in t || (t = {}))
    c.call(t, r) && m(e, r, t[r]);
  if (o)
    for (var r of o(t))
      R.call(t, r) && m(e, r, t[r]);
  return e;
}, f = (e, t) => p(e, s(t));
import d, { forwardRef as l } from "react";
import n from "../lib/SSRBase.mjs";
import w from "../defs/Gift.mjs";
const G = l((e, t) => /* @__PURE__ */ d.createElement(n, f(a({ ref: t }, e), { weights: w })));
G.displayName = "Gift";
export {
  G as Gift
};
