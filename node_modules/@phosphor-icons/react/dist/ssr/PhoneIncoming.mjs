var i = Object.defineProperty, c = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var t = (e, o, m) => o in e ? i(e, o, { enumerable: !0, configurable: !0, writable: !0, value: m }) : e[o] = m, n = (e, o) => {
  for (var m in o || (o = {}))
    p.call(o, m) && t(e, m, o[m]);
  if (r)
    for (var m of r(o))
      s.call(o, m) && t(e, m, o[m]);
  return e;
}, a = (e, o) => c(e, f(o));
import g, { forwardRef as h } from "react";
import I from "../lib/SSRBase.mjs";
import R from "../defs/PhoneIncoming.mjs";
const d = h((e, o) => /* @__PURE__ */ g.createElement(I, a(n({ ref: o }, e), { weights: R })));
d.displayName = "PhoneIncoming";
export {
  d as PhoneIncoming
};
