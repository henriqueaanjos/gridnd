var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var d = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var m = (e, t, r) => t in e ? i(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, a = (e, t) => {
  for (var r in t || (t = {}))
    d.call(t, r) && m(e, r, t[r]);
  if (o)
    for (var r of o(t))
      n.call(t, r) && m(e, r, t[r]);
  return e;
}, f = (e, t) => p(e, s(t));
import c, { forwardRef as x } from "react";
import R from "../lib/SSRBase.mjs";
import l from "../defs/TextOutdent.mjs";
const u = x((e, t) => /* @__PURE__ */ c.createElement(R, f(a({ ref: t }, e), { weights: l })));
u.displayName = "TextOutdent";
export {
  u as TextOutdent
};
