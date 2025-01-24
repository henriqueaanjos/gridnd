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
import R from "../lib/SSRBase.mjs";
import d from "../defs/PhoneOutgoing.mjs";
const l = h((e, o) => /* @__PURE__ */ c.createElement(R, i(a({ ref: o }, e), { weights: d })));
l.displayName = "PhoneOutgoing";
export {
  l as PhoneOutgoing
};
