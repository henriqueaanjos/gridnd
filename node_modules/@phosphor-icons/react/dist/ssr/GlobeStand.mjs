var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var d = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var a = (o, e, t) => e in o ? i(o, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[e] = t, m = (o, e) => {
  for (var t in e || (e = {}))
    d.call(e, t) && a(o, t, e[t]);
  if (r)
    for (var t of r(e))
      l.call(e, t) && a(o, t, e[t]);
  return o;
}, f = (o, e) => p(o, s(e));
import n, { forwardRef as S } from "react";
import c from "../lib/SSRBase.mjs";
import R from "../defs/GlobeStand.mjs";
const b = S((o, e) => /* @__PURE__ */ n.createElement(c, f(m({ ref: e }, o), { weights: R })));
b.displayName = "GlobeStand";
export {
  b as GlobeStand
};
