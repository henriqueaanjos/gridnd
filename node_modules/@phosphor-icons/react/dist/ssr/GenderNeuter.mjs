var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var d = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var m = (r, e, t) => e in r ? i(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t, a = (r, e) => {
  for (var t in e || (e = {}))
    d.call(e, t) && m(r, t, e[t]);
  if (o)
    for (var t of o(e))
      n.call(e, t) && m(r, t, e[t]);
  return r;
}, f = (r, e) => p(r, s(e));
import c, { forwardRef as N } from "react";
import R from "../lib/SSRBase.mjs";
import l from "../defs/GenderNeuter.mjs";
const u = N((r, e) => /* @__PURE__ */ c.createElement(R, f(a({ ref: e }, r), { weights: l })));
u.displayName = "GenderNeuter";
export {
  u as GenderNeuter
};
