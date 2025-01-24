var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var m = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, g = Object.prototype.propertyIsEnumerable;
var a = (o, r, e) => r in o ? i(o, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : o[r] = e, t = (o, r) => {
  for (var e in r || (r = {}))
    c.call(r, e) && a(o, e, r[e]);
  if (m)
    for (var e of m(r))
      g.call(r, e) && a(o, e, r[e]);
  return o;
}, f = (o, r) => p(o, s(r));
import R, { forwardRef as d } from "react";
import l from "../lib/SSRBase.mjs";
import n from "../defs/FramerLogo.mjs";
const w = d((o, r) => /* @__PURE__ */ R.createElement(l, f(t({ ref: r }, o), { weights: n })));
w.displayName = "FramerLogo";
export {
  w as FramerLogo
};
