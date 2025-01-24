var f = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var a = (r, e, t) => e in r ? f(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t, m = (r, e) => {
  for (var t in e || (e = {}))
    c.call(e, t) && a(r, t, e[t]);
  if (o)
    for (var t of o(e))
      d.call(e, t) && a(r, t, e[t]);
  return r;
}, i = (r, e) => p(r, s(e));
import l, { forwardRef as S } from "react";
import h from "../lib/IconBase.mjs";
import n from "../defs/ShieldStar.mjs";
const w = S((r, e) => /* @__PURE__ */ l.createElement(h, i(m({ ref: e }, r), { weights: n })));
w.displayName = "ShieldStar";
export {
  w as ShieldStar
};
