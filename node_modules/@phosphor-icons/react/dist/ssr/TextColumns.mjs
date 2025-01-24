var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var m = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var r = (o, e, t) => e in o ? f(o, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[e] = t, a = (o, e) => {
  for (var t in e || (e = {}))
    l.call(e, t) && r(o, t, e[t]);
  if (m)
    for (var t of m(e))
      n.call(e, t) && r(o, t, e[t]);
  return o;
}, s = (o, e) => i(o, p(e));
import c, { forwardRef as x } from "react";
import R from "../lib/SSRBase.mjs";
import d from "../defs/TextColumns.mjs";
const u = x((o, e) => /* @__PURE__ */ c.createElement(R, s(a({ ref: e }, o), { weights: d })));
u.displayName = "TextColumns";
export {
  u as TextColumns
};
