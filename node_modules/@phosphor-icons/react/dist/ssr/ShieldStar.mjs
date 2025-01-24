var S = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var o = (r, e, t) => e in r ? S(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t, m = (r, e) => {
  for (var t in e || (e = {}))
    s.call(e, t) && o(r, t, e[t]);
  if (a)
    for (var t of a(e))
      d.call(e, t) && o(r, t, e[t]);
  return r;
}, i = (r, e) => f(r, p(e));
import l, { forwardRef as c } from "react";
import h from "../lib/SSRBase.mjs";
import R from "../defs/ShieldStar.mjs";
const n = c((r, e) => /* @__PURE__ */ l.createElement(h, i(m({ ref: e }, r), { weights: R })));
n.displayName = "ShieldStar";
export {
  n as ShieldStar
};
