var f = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var n = Object.prototype.hasOwnProperty, S = Object.prototype.propertyIsEnumerable;
var m = (e, t, r) => t in e ? f(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, a = (e, t) => {
  for (var r in t || (t = {}))
    n.call(t, r) && m(e, r, t[r]);
  if (o)
    for (var r of o(t))
      S.call(t, r) && m(e, r, t[r]);
  return e;
}, i = (e, t) => p(e, s(t));
import c, { forwardRef as g } from "react";
import R from "../lib/SSRBase.mjs";
import d from "../defs/SignOut.mjs";
const l = g((e, t) => /* @__PURE__ */ c.createElement(R, i(a({ ref: t }, e), { weights: d })));
l.displayName = "SignOut";
export {
  l as SignOut
};
