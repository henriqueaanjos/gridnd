var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var m = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, g = Object.prototype.propertyIsEnumerable;
var a = (r, o, e) => o in r ? i(r, o, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[o] = e, t = (r, o) => {
  for (var e in o || (o = {}))
    c.call(o, e) && a(r, e, o[e]);
  if (m)
    for (var e of m(o))
      g.call(o, e) && a(r, e, o[e]);
  return r;
}, f = (r, o) => p(r, s(o));
import n, { forwardRef as d } from "react";
import l from "../lib/IconBase.mjs";
import w from "../defs/FramerLogo.mjs";
const F = d((r, o) => /* @__PURE__ */ n.createElement(l, f(t({ ref: o }, r), { weights: w })));
F.displayName = "FramerLogo";
export {
  F as FramerLogo
};
