var s = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var a = (r, t, e) => t in r ? s(r, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[t] = e, m = (r, t) => {
  for (var e in t || (t = {}))
    c.call(t, e) && a(r, e, t[e]);
  if (o)
    for (var e of o(t))
      n.call(t, e) && a(r, e, t[e]);
  return r;
}, i = (r, t) => f(r, p(t));
import d, { forwardRef as l } from "react";
import w from "../lib/IconBase.mjs";
import I from "../defs/ListStar.mjs";
const L = l((r, t) => /* @__PURE__ */ d.createElement(w, i(m({ ref: t }, r), { weights: I })));
L.displayName = "ListStar";
export {
  L as ListStar
};
