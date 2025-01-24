var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var w = Object.prototype.hasOwnProperty, T = Object.prototype.propertyIsEnumerable;
var m = (o, e, t) => e in o ? i(o, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[e] = t, a = (o, e) => {
  for (var t in e || (e = {}))
    w.call(e, t) && m(o, t, e[t]);
  if (r)
    for (var t of r(e))
      T.call(e, t) && m(o, t, e[t]);
  return o;
}, f = (o, e) => p(o, s(e));
import c, { forwardRef as x } from "react";
import R from "../lib/SSRBase.mjs";
import d from "../defs/TextHTwo.mjs";
const l = x((o, e) => /* @__PURE__ */ c.createElement(R, f(a({ ref: e }, o), { weights: d })));
l.displayName = "TextHTwo";
export {
  l as TextHTwo
};
