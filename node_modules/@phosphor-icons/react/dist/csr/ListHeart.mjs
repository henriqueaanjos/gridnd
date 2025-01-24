var s = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var a = (e, t, r) => t in e ? s(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, m = (e, t) => {
  for (var r in t || (t = {}))
    c.call(t, r) && a(e, r, t[r]);
  if (o)
    for (var r of o(t))
      n.call(t, r) && a(e, r, t[r]);
  return e;
}, i = (e, t) => f(e, p(t));
import d, { forwardRef as l } from "react";
import w from "../lib/IconBase.mjs";
import H from "../defs/ListHeart.mjs";
const I = l((e, t) => /* @__PURE__ */ d.createElement(w, i(m({ ref: t }, e), { weights: H })));
I.displayName = "ListHeart";
export {
  I as ListHeart
};
