var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var y = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var t = (o, e, r) => e in o ? i(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, m = (o, e) => {
  for (var r in e || (e = {}))
    y.call(e, r) && t(o, r, e[r]);
  if (a)
    for (var r of a(e))
      n.call(e, r) && t(o, r, e[r]);
  return o;
}, f = (o, e) => p(o, s(e));
import c, { forwardRef as R } from "react";
import d from "../lib/SSRBase.mjs";
import l from "../defs/MoneyWavy.mjs";
const v = R((o, e) => /* @__PURE__ */ c.createElement(d, f(m({ ref: e }, o), { weights: l })));
v.displayName = "MoneyWavy";
export {
  v as MoneyWavy
};
