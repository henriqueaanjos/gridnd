var p = Object.defineProperty, f = Object.defineProperties;
var i = Object.getOwnPropertyDescriptors;
var m = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var o = (a, e, t) => e in a ? p(a, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : a[e] = t, r = (a, e) => {
  for (var t in e || (e = {}))
    s.call(e, t) && o(a, t, e[t]);
  if (m)
    for (var t of m(e))
      c.call(e, t) && o(a, t, e[t]);
  return a;
}, n = (a, e) => f(a, i(e));
import d, { forwardRef as l } from "react";
import w from "../lib/IconBase.mjs";
import I from "../defs/LampPendant.mjs";
const L = l((a, e) => /* @__PURE__ */ d.createElement(w, n(r({ ref: e }, a), { weights: I })));
L.displayName = "LampPendant";
export {
  L as LampPendant
};
