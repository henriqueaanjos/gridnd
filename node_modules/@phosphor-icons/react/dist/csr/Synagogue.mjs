var g = Object.defineProperty, i = Object.defineProperties;
var n = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var t = (o, e, r) => e in o ? g(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, m = (o, e) => {
  for (var r in e || (e = {}))
    p.call(e, r) && t(o, r, e[r]);
  if (a)
    for (var r of a(e))
      s.call(e, r) && t(o, r, e[r]);
  return o;
}, f = (o, e) => i(o, n(e));
import c, { forwardRef as y } from "react";
import d from "../lib/IconBase.mjs";
import l from "../defs/Synagogue.mjs";
const u = y((o, e) => /* @__PURE__ */ c.createElement(d, f(m({ ref: e }, o), { weights: l })));
u.displayName = "Synagogue";
export {
  u as Synagogue
};
