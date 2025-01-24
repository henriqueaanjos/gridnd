var n = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, S = Object.prototype.propertyIsEnumerable;
var m = (r, o, e) => o in r ? n(r, o, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[o] = e, a = (r, o) => {
  for (var e in o || (o = {}))
    s.call(o, e) && m(r, e, o[e]);
  if (t)
    for (var e of t(o))
      S.call(o, e) && m(r, e, o[e]);
  return r;
}, i = (r, o) => f(r, p(o));
import c, { forwardRef as R } from "react";
import d from "../lib/SSRBase.mjs";
import l from "../defs/SunHorizon.mjs";
const u = R((r, o) => /* @__PURE__ */ c.createElement(d, i(a({ ref: o }, r), { weights: l })));
u.displayName = "SunHorizon";
export {
  u as SunHorizon
};
