var s = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var d = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var m = (o, e, r) => e in o ? s(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, a = (o, e) => {
  for (var r in e || (e = {}))
    d.call(e, r) && m(o, r, e[r]);
  if (t)
    for (var r of t(e))
      l.call(e, r) && m(o, r, e[r]);
  return o;
}, i = (o, e) => f(o, p(e));
import w, { forwardRef as S } from "react";
import c from "../lib/SSRBase.mjs";
import h from "../defs/Slideshow.mjs";
const R = S((o, e) => /* @__PURE__ */ w.createElement(c, i(a({ ref: e }, o), { weights: h })));
R.displayName = "Slideshow";
export {
  R as Slideshow
};
