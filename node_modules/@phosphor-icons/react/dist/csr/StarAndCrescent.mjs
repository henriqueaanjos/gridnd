var s = Object.defineProperty, c = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var a = (r, e, t) => e in r ? s(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t, m = (r, e) => {
  for (var t in e || (e = {}))
    i.call(e, t) && a(r, t, e[t]);
  if (o)
    for (var t of o(e))
      p.call(e, t) && a(r, t, e[t]);
  return r;
}, n = (r, e) => c(r, f(e));
import d, { forwardRef as l } from "react";
import w from "../lib/IconBase.mjs";
import A from "../defs/StarAndCrescent.mjs";
const C = l((r, e) => /* @__PURE__ */ d.createElement(w, n(m({ ref: e }, r), { weights: A })));
C.displayName = "StarAndCrescent";
export {
  C as StarAndCrescent
};
