var n = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var t = (o, r, e) => r in o ? n(o, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : o[r] = e, m = (o, r) => {
  for (var e in r || (r = {}))
    s.call(r, e) && t(o, e, r[e]);
  if (a)
    for (var e of a(r))
      d.call(r, e) && t(o, e, r[e]);
  return o;
}, i = (o, r) => f(o, p(r));
import l, { forwardRef as c } from "react";
import g from "../lib/SSRBase.mjs";
import R from "../defs/CloudWarning.mjs";
const u = c((o, r) => /* @__PURE__ */ l.createElement(g, i(m({ ref: r }, o), { weights: R })));
u.displayName = "CloudWarning";
export {
  u as CloudWarning
};
