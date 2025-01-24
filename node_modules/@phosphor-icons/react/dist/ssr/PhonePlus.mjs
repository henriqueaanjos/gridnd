var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var m = (o, e, r) => e in o ? f(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, a = (o, e) => {
  for (var r in e || (e = {}))
    l.call(e, r) && m(o, r, e[r]);
  if (t)
    for (var r of t(e))
      n.call(e, r) && m(o, r, e[r]);
  return o;
}, s = (o, e) => i(o, p(e));
import P, { forwardRef as c } from "react";
import h from "../lib/SSRBase.mjs";
import R from "../defs/PhonePlus.mjs";
const d = c((o, e) => /* @__PURE__ */ P.createElement(h, s(a({ ref: e }, o), { weights: R })));
d.displayName = "PhonePlus";
export {
  d as PhonePlus
};
