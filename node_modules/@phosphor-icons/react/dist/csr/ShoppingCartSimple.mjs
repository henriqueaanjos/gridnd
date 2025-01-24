var i = Object.defineProperty, f = Object.defineProperties;
var n = Object.getOwnPropertyDescriptors;
var p = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var t = (o, e, r) => e in o ? i(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, m = (o, e) => {
  for (var r in e || (e = {}))
    s.call(e, r) && t(o, r, e[r]);
  if (p)
    for (var r of p(e))
      c.call(e, r) && t(o, r, e[r]);
  return o;
}, a = (o, e) => f(o, n(e));
import l, { forwardRef as S } from "react";
import g from "../lib/IconBase.mjs";
import h from "../defs/ShoppingCartSimple.mjs";
const d = S((o, e) => /* @__PURE__ */ l.createElement(g, a(m({ ref: e }, o), { weights: h })));
d.displayName = "ShoppingCartSimple";
export {
  d as ShoppingCartSimple
};
