var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var R = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var t = (r, o, e) => o in r ? i(r, o, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[o] = e, m = (r, o) => {
  for (var e in o || (o = {}))
    R.call(o, e) && t(r, e, o[e]);
  if (a)
    for (var e of a(o))
      l.call(o, e) && t(r, e, o[e]);
  return r;
}, f = (r, o) => p(r, s(o));
import S, { forwardRef as c } from "react";
import d from "../lib/SSRBase.mjs";
import n from "../defs/SolarRoof.mjs";
const w = c((r, o) => /* @__PURE__ */ S.createElement(d, f(m({ ref: o }, r), { weights: n })));
w.displayName = "SolarRoof";
export {
  w as SolarRoof
};
