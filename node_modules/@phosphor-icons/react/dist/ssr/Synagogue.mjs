var g = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var t = (o, e, r) => e in o ? g(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, m = (o, e) => {
  for (var r in e || (e = {}))
    s.call(e, r) && t(o, r, e[r]);
  if (a)
    for (var r of a(e))
      n.call(e, r) && t(o, r, e[r]);
  return o;
}, f = (o, e) => i(o, p(e));
import S, { forwardRef as c } from "react";
import y from "../lib/SSRBase.mjs";
import R from "../defs/Synagogue.mjs";
const d = c((o, e) => /* @__PURE__ */ S.createElement(y, f(m({ ref: e }, o), { weights: R })));
d.displayName = "Synagogue";
export {
  d as Synagogue
};
