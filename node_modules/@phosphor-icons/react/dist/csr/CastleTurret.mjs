var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var a = (r, e, t) => e in r ? f(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t, m = (r, e) => {
  for (var t in e || (e = {}))
    c.call(e, t) && a(r, t, e[t]);
  if (o)
    for (var t of o(e))
      l.call(e, t) && a(r, t, e[t]);
  return r;
}, s = (r, e) => i(r, p(e));
import n, { forwardRef as d } from "react";
import u from "../lib/IconBase.mjs";
import w from "../defs/CastleTurret.mjs";
const C = d((r, e) => /* @__PURE__ */ n.createElement(u, s(m({ ref: e }, r), { weights: w })));
C.displayName = "CastleTurret";
export {
  C as CastleTurret
};
