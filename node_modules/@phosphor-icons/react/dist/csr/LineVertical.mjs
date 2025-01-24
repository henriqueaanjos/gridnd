var c = Object.defineProperty, f = Object.defineProperties;
var n = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var a = (r, e, t) => e in r ? c(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t, i = (r, e) => {
  for (var t in e || (e = {}))
    p.call(e, t) && a(r, t, e[t]);
  if (o)
    for (var t of o(e))
      s.call(e, t) && a(r, t, e[t]);
  return r;
}, m = (r, e) => f(r, n(e));
import l, { forwardRef as d } from "react";
import w from "../lib/IconBase.mjs";
import I from "../defs/LineVertical.mjs";
const L = d((r, e) => /* @__PURE__ */ l.createElement(w, m(i({ ref: e }, r), { weights: I })));
L.displayName = "LineVertical";
export {
  L as LineVertical
};
