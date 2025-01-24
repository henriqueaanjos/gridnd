var i = Object.defineProperty, f = Object.defineProperties;
var n = Object.getOwnPropertyDescriptors;
var s = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var t = (o, e, r) => e in o ? i(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, m = (o, e) => {
  for (var r in e || (e = {}))
    p.call(e, r) && t(o, r, e[r]);
  if (s)
    for (var r of s(e))
      c.call(e, r) && t(o, r, e[r]);
  return o;
}, a = (o, e) => f(o, n(e));
import l, { forwardRef as u } from "react";
import d from "../lib/IconBase.mjs";
import w from "../defs/PlusMinus.mjs";
const I = u((o, e) => /* @__PURE__ */ l.createElement(d, a(m({ ref: e }, o), { weights: w })));
I.displayName = "PlusMinus";
export {
  I as PlusMinus
};
