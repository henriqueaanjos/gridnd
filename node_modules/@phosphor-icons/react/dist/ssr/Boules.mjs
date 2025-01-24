var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var m = (o, e, r) => e in o ? f(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, a = (o, e) => {
  for (var r in e || (e = {}))
    l.call(e, r) && m(o, r, e[r]);
  if (t)
    for (var r of t(e))
      c.call(e, r) && m(o, r, e[r]);
  return o;
}, s = (o, e) => i(o, p(e));
import B, { forwardRef as R } from "react";
import d from "../lib/SSRBase.mjs";
import n from "../defs/Boules.mjs";
const u = R((o, e) => /* @__PURE__ */ B.createElement(d, s(a({ ref: e }, o), { weights: n })));
u.displayName = "Boules";
export {
  u as Boules
};
