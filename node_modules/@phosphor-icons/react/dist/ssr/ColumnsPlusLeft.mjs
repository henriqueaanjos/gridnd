var f = Object.defineProperty, l = Object.defineProperties;
var i = Object.getOwnPropertyDescriptors;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var r = (o, e, t) => e in o ? f(o, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[e] = t, s = (o, e) => {
  for (var t in e || (e = {}))
    p.call(e, t) && r(o, t, e[t]);
  if (m)
    for (var t of m(e))
      n.call(e, t) && r(o, t, e[t]);
  return o;
}, a = (o, e) => l(o, i(e));
import u, { forwardRef as c } from "react";
import R from "../lib/SSRBase.mjs";
import d from "../defs/ColumnsPlusLeft.mjs";
const w = c((o, e) => /* @__PURE__ */ u.createElement(R, a(s({ ref: e }, o), { weights: d })));
w.displayName = "ColumnsPlusLeft";
export {
  w as ColumnsPlusLeft
};
