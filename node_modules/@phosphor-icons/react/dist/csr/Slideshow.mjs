var s = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var m = (o, e, r) => e in o ? s(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, a = (o, e) => {
  for (var r in e || (e = {}))
    c.call(e, r) && m(o, r, e[r]);
  if (t)
    for (var r of t(e))
      d.call(e, r) && m(o, r, e[r]);
  return o;
}, i = (o, e) => f(o, p(e));
import l, { forwardRef as w } from "react";
import h from "../lib/IconBase.mjs";
import n from "../defs/Slideshow.mjs";
const I = w((o, e) => /* @__PURE__ */ l.createElement(h, i(a({ ref: e }, o), { weights: n })));
I.displayName = "Slideshow";
export {
  I as Slideshow
};
