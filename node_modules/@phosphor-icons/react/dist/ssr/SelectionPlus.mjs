var s = Object.defineProperty, l = Object.defineProperties;
var c = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var f = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var m = (o, e, t) => e in o ? s(o, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[e] = t, a = (o, e) => {
  for (var t in e || (e = {}))
    f.call(e, t) && m(o, t, e[t]);
  if (r)
    for (var t of r(e))
      p.call(e, t) && m(o, t, e[t]);
  return o;
}, i = (o, e) => l(o, c(e));
import n, { forwardRef as S } from "react";
import R from "../lib/SSRBase.mjs";
import d from "../defs/SelectionPlus.mjs";
const u = S((o, e) => /* @__PURE__ */ n.createElement(R, i(a({ ref: e }, o), { weights: d })));
u.displayName = "SelectionPlus";
export {
  u as SelectionPlus
};
