var p = Object.defineProperty, s = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var t = (r, e, a) => e in r ? p(r, e, { enumerable: !0, configurable: !0, writable: !0, value: a }) : r[e] = a, m = (r, e) => {
  for (var a in e || (e = {}))
    l.call(e, a) && t(r, a, e[a]);
  if (o)
    for (var a of o(e))
      n.call(e, a) && t(r, a, e[a]);
  return r;
}, i = (r, e) => s(r, f(e));
import P, { forwardRef as c } from "react";
import R from "../lib/SSRBase.mjs";
import d from "../defs/MapPinPlus.mjs";
const u = c((r, e) => /* @__PURE__ */ P.createElement(R, i(m({ ref: e }, r), { weights: d })));
u.displayName = "MapPinPlus";
export {
  u as MapPinPlus
};
