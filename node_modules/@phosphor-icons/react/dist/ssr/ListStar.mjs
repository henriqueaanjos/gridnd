var s = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var S = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var o = (r, t, e) => t in r ? s(r, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[t] = e, m = (r, t) => {
  for (var e in t || (t = {}))
    S.call(t, e) && o(r, e, t[e]);
  if (a)
    for (var e of a(t))
      c.call(t, e) && o(r, e, t[e]);
  return r;
}, i = (r, t) => f(r, p(t));
import R, { forwardRef as d } from "react";
import l from "../lib/SSRBase.mjs";
import n from "../defs/ListStar.mjs";
const w = d((r, t) => /* @__PURE__ */ R.createElement(l, i(m({ ref: t }, r), { weights: n })));
w.displayName = "ListStar";
export {
  w as ListStar
};
