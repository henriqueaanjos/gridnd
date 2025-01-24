var f = Object.defineProperty, g = Object.defineProperties;
var i = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var m = (e, o, t) => o in e ? f(e, o, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[o] = t, a = (e, o) => {
  for (var t in o || (o = {}))
    p.call(o, t) && m(e, t, o[t]);
  if (r)
    for (var t of r(o))
      c.call(o, t) && m(e, t, o[t]);
  return e;
}, s = (e, o) => g(e, i(o));
import l, { forwardRef as h } from "react";
import n from "../lib/IconBase.mjs";
import d from "../defs/GooglePhotosLogo.mjs";
const w = h((e, o) => /* @__PURE__ */ l.createElement(n, s(a({ ref: o }, e), { weights: d })));
w.displayName = "GooglePhotosLogo";
export {
  w as GooglePhotosLogo
};
