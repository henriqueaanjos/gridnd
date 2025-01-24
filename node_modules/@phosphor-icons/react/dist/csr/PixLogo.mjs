var f = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, g = Object.prototype.propertyIsEnumerable;
var m = (e, o, r) => o in e ? f(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, a = (e, o) => {
  for (var r in o || (o = {}))
    c.call(o, r) && m(e, r, o[r]);
  if (t)
    for (var r of t(o))
      g.call(o, r) && m(e, r, o[r]);
  return e;
}, i = (e, o) => p(e, s(o));
import n, { forwardRef as x } from "react";
import d from "../lib/IconBase.mjs";
import l from "../defs/PixLogo.mjs";
const w = x((e, o) => /* @__PURE__ */ n.createElement(d, i(a({ ref: o }, e), { weights: l })));
w.displayName = "PixLogo";
export {
  w as PixLogo
};
