var i = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var m = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var o = (r, e, t) => e in r ? i(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t, s = (r, e) => {
  for (var t in e || (e = {}))
    c.call(e, t) && o(r, t, e[t]);
  if (m)
    for (var t of m(e))
      n.call(e, t) && o(r, t, e[t]);
  return r;
}, a = (r, e) => f(r, p(e));
import N, { forwardRef as b } from "react";
import d from "../lib/IconBase.mjs";
import l from "../defs/ListNumbers.mjs";
const u = b((r, e) => /* @__PURE__ */ N.createElement(d, a(s({ ref: e }, r), { weights: l })));
u.displayName = "ListNumbers";
export {
  u as ListNumbers
};
