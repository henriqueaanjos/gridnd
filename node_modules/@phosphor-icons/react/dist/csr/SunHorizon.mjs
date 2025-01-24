var n = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var m = (r, o, e) => o in r ? n(r, o, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[o] = e, a = (r, o) => {
  for (var e in o || (o = {}))
    s.call(o, e) && m(r, e, o[e]);
  if (t)
    for (var e of t(o))
      c.call(o, e) && m(r, e, o[e]);
  return r;
}, i = (r, o) => f(r, p(o));
import d, { forwardRef as l } from "react";
import u from "../lib/IconBase.mjs";
import w from "../defs/SunHorizon.mjs";
const z = l((r, o) => /* @__PURE__ */ d.createElement(u, i(a({ ref: o }, r), { weights: w })));
z.displayName = "SunHorizon";
export {
  z as SunHorizon
};
