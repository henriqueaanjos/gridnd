var s = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, R = Object.prototype.propertyIsEnumerable;
var o = (e, t, r) => t in e ? s(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, m = (e, t) => {
  for (var r in t || (t = {}))
    c.call(t, r) && o(e, r, t[r]);
  if (a)
    for (var r of a(t))
      R.call(t, r) && o(e, r, t[r]);
  return e;
}, i = (e, t) => f(e, p(t));
import d, { forwardRef as l } from "react";
import n from "../lib/SSRBase.mjs";
import w from "../defs/ListHeart.mjs";
const H = l((e, t) => /* @__PURE__ */ d.createElement(n, i(m({ ref: t }, e), { weights: w })));
H.displayName = "ListHeart";
export {
  H as ListHeart
};
