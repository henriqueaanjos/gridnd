var s = Object.defineProperty, f = Object.defineProperties;
var n = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var m = (o, e, r) => e in o ? s(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, a = (o, e) => {
  for (var r in e || (e = {}))
    p.call(e, r) && m(o, r, e[r]);
  if (t)
    for (var r of t(e))
      c.call(e, r) && m(o, r, e[r]);
  return o;
}, i = (o, e) => f(o, n(e));
import P, { forwardRef as h } from "react";
import d from "../lib/IconBase.mjs";
import l from "../defs/PushPin.mjs";
const u = h((o, e) => /* @__PURE__ */ P.createElement(d, i(a({ ref: e }, o), { weights: l })));
u.displayName = "PushPin";
export {
  u as PushPin
};
