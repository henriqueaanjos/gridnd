var f = Object.defineProperty, l = Object.defineProperties;
var i = Object.getOwnPropertyDescriptors;
var m = Object.getOwnPropertySymbols;
var n = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var r = (o, e, t) => e in o ? f(o, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[e] = t, s = (o, e) => {
  for (var t in e || (e = {}))
    n.call(e, t) && r(o, t, e[t]);
  if (m)
    for (var t of m(e))
      p.call(e, t) && r(o, t, e[t]);
  return o;
}, a = (o, e) => l(o, i(e));
import c, { forwardRef as u } from "react";
import d from "../lib/IconBase.mjs";
import w from "../defs/ColumnsPlusLeft.mjs";
const C = u((o, e) => /* @__PURE__ */ c.createElement(d, a(s({ ref: e }, o), { weights: w })));
C.displayName = "ColumnsPlusLeft";
export {
  C as ColumnsPlusLeft
};
