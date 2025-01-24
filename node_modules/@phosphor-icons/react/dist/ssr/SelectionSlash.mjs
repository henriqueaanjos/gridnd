var s = Object.defineProperty, l = Object.defineProperties;
var S = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, f = Object.prototype.propertyIsEnumerable;
var a = (o, e, t) => e in o ? s(o, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[e] = t, m = (o, e) => {
  for (var t in e || (e = {}))
    c.call(e, t) && a(o, t, e[t]);
  if (r)
    for (var t of r(e))
      f.call(e, t) && a(o, t, e[t]);
  return o;
}, i = (o, e) => l(o, S(e));
import p, { forwardRef as n } from "react";
import h from "../lib/SSRBase.mjs";
import R from "../defs/SelectionSlash.mjs";
const d = n((o, e) => /* @__PURE__ */ p.createElement(h, i(m({ ref: e }, o), { weights: R })));
d.displayName = "SelectionSlash";
export {
  d as SelectionSlash
};
