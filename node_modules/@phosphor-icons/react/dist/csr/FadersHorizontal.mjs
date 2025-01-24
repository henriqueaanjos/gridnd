var s = Object.defineProperty, f = Object.defineProperties;
var n = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var t = (r, o, e) => o in r ? s(r, o, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[o] = e, m = (r, o) => {
  for (var e in o || (o = {}))
    p.call(o, e) && t(r, e, o[e]);
  if (a)
    for (var e of a(o))
      c.call(o, e) && t(r, e, o[e]);
  return r;
}, i = (r, o) => f(r, n(o));
import d, { forwardRef as l } from "react";
import w from "../lib/IconBase.mjs";
import z from "../defs/FadersHorizontal.mjs";
const F = l((r, o) => /* @__PURE__ */ d.createElement(w, i(m({ ref: o }, r), { weights: z })));
F.displayName = "FadersHorizontal";
export {
  F as FadersHorizontal
};
