var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var e = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var o = (a, r, t) => r in a ? i(a, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : a[r] = t, m = (a, r) => {
  for (var t in r || (r = {}))
    c.call(r, t) && o(a, t, r[t]);
  if (e)
    for (var t of e(r))
      l.call(r, t) && o(a, t, r[t]);
  return a;
}, f = (a, r) => p(a, s(r));
import n, { forwardRef as d } from "react";
import w from "../lib/IconBase.mjs";
import H from "../defs/StarHalf.mjs";
const I = d((a, r) => /* @__PURE__ */ n.createElement(w, f(m({ ref: r }, a), { weights: H })));
I.displayName = "StarHalf";
export {
  I as StarHalf
};
