var f = Object.defineProperty, i = Object.defineProperties;
var n = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var m = (o, e, r) => e in o ? f(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, a = (o, e) => {
  for (var r in e || (e = {}))
    p.call(e, r) && m(o, r, e[r]);
  if (t)
    for (var r of t(e))
      c.call(e, r) && m(o, r, e[r]);
  return o;
}, s = (o, e) => i(o, n(e));
import l, { forwardRef as P } from "react";
import h from "../lib/IconBase.mjs";
import d from "../defs/PhonePlus.mjs";
const u = P((o, e) => /* @__PURE__ */ l.createElement(h, s(a({ ref: e }, o), { weights: d })));
u.displayName = "PhonePlus";
export {
  u as PhonePlus
};
