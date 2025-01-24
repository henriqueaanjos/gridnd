var f = Object.defineProperty, i = Object.defineProperties;
var n = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var m = (r, e, t) => e in r ? f(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t, a = (r, e) => {
  for (var t in e || (e = {}))
    p.call(e, t) && m(r, t, e[t]);
  if (o)
    for (var t of o(e))
      s.call(e, t) && m(r, t, e[t]);
  return r;
}, c = (r, e) => i(r, n(e));
import d, { forwardRef as l } from "react";
import w from "../lib/IconBase.mjs";
import I from "../defs/Percent.mjs";
const P = l((r, e) => /* @__PURE__ */ d.createElement(w, c(a({ ref: e }, r), { weights: I })));
P.displayName = "Percent";
export {
  P as Percent
};
