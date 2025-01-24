var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, h = Object.prototype.propertyIsEnumerable;
var a = (r, e, t) => e in r ? i(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t, m = (r, e) => {
  for (var t in e || (e = {}))
    c.call(e, t) && a(r, t, e[t]);
  if (o)
    for (var t of o(e))
      h.call(e, t) && a(r, t, e[t]);
  return r;
}, f = (r, e) => p(r, s(e));
import n, { forwardRef as d } from "react";
import l from "../lib/IconBase.mjs";
import w from "../defs/Feather.mjs";
const F = d((r, e) => /* @__PURE__ */ n.createElement(l, f(m({ ref: e }, r), { weights: w })));
F.displayName = "Feather";
export {
  F as Feather
};
