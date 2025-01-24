var f = Object.defineProperty, g = Object.defineProperties;
var i = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var m = (e, o, t) => o in e ? f(e, o, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[o] = t, a = (e, o) => {
  for (var t in o || (o = {}))
    p.call(o, t) && m(e, t, o[t]);
  if (r)
    for (var t of r(o))
      l.call(o, t) && m(e, t, o[t]);
  return e;
}, s = (e, o) => g(e, i(o));
import c, { forwardRef as h } from "react";
import R from "../lib/SSRBase.mjs";
import d from "../defs/GooglePhotosLogo.mjs";
const n = h((e, o) => /* @__PURE__ */ c.createElement(R, s(a({ ref: o }, e), { weights: d })));
n.displayName = "GooglePhotosLogo";
export {
  n as GooglePhotosLogo
};
