var s = Object.defineProperty, c = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var t = (o, r, e) => r in o ? s(o, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : o[r] = e, m = (o, r) => {
  for (var e in r || (r = {}))
    p.call(r, e) && t(o, e, r[e]);
  if (a)
    for (var e of a(r))
      l.call(r, e) && t(o, e, r[e]);
  return o;
}, i = (o, r) => c(o, f(r));
import n, { forwardRef as B } from "react";
import R from "../lib/SSRBase.mjs";
import d from "../defs/Binoculars.mjs";
const u = B((o, r) => /* @__PURE__ */ n.createElement(R, i(m({ ref: r }, o), { weights: d })));
u.displayName = "Binoculars";
export {
  u as Binoculars
};
