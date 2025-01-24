var s = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, R = Object.prototype.propertyIsEnumerable;
var m = (e, t, r) => t in e ? s(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, a = (e, t) => {
  for (var r in t || (t = {}))
    c.call(t, r) && m(e, r, t[r]);
  if (o)
    for (var r of o(t))
      R.call(t, r) && m(e, r, t[r]);
  return e;
}, i = (e, t) => f(e, p(t));
import d, { forwardRef as l } from "react";
import n from "../lib/SSRBase.mjs";
import w from "../defs/List.mjs";
const L = l((e, t) => /* @__PURE__ */ d.createElement(n, i(a({ ref: t }, e), { weights: w })));
L.displayName = "List";
export {
  L as List
};
