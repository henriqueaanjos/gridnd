var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var t = (r, o, e) => o in r ? i(r, o, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[o] = e, m = (r, o) => {
  for (var e in o || (o = {}))
    c.call(o, e) && t(r, e, o[e]);
  if (a)
    for (var e of a(o))
      l.call(o, e) && t(r, e, o[e]);
  return r;
}, f = (r, o) => p(r, s(o));
import R, { forwardRef as n } from "react";
import d from "../lib/IconBase.mjs";
import w from "../defs/SolarRoof.mjs";
const I = n((r, o) => /* @__PURE__ */ R.createElement(d, f(m({ ref: o }, r), { weights: w })));
I.displayName = "SolarRoof";
export {
  I as SolarRoof
};
