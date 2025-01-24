var n = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var i = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var o = (r, e, a) => e in r ? n(r, e, { enumerable: !0, configurable: !0, writable: !0, value: a }) : r[e] = a, t = (r, e) => {
  for (var a in e || (e = {}))
    s.call(e, a) && o(r, a, e[a]);
  if (i)
    for (var a of i(e))
      d.call(e, a) && o(r, a, e[a]);
  return r;
}, m = (r, e) => f(r, p(e));
import l, { forwardRef as S } from "react";
import c from "../lib/SSRBase.mjs";
import g from "../defs/ShieldWarning.mjs";
const h = S((r, e) => /* @__PURE__ */ l.createElement(c, m(t({ ref: e }, r), { weights: g })));
h.displayName = "ShieldWarning";
export {
  h as ShieldWarning
};
