var n = Object.defineProperty, f = Object.defineProperties;
var g = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var m = (e, o, t) => o in e ? n(e, o, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[o] = t, a = (e, o) => {
  for (var t in o || (o = {}))
    p.call(o, t) && m(e, t, o[t]);
  if (r)
    for (var t of r(o))
      s.call(o, t) && m(e, t, o[t]);
  return e;
}, i = (e, o) => f(e, g(o));
import c, { forwardRef as h } from "react";
import d from "../lib/IconBase.mjs";
import l from "../defs/PhoneOutgoing.mjs";
const u = h((e, o) => /* @__PURE__ */ c.createElement(d, i(a({ ref: o }, e), { weights: l })));
u.displayName = "PhoneOutgoing";
export {
  u as PhoneOutgoing
};
