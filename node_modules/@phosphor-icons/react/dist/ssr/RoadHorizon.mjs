var f = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var R = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var t = (r, o, e) => o in r ? f(r, o, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[o] = e, m = (r, o) => {
  for (var e in o || (o = {}))
    R.call(o, e) && t(r, e, o[e]);
  if (a)
    for (var e of a(o))
      d.call(o, e) && t(r, e, o[e]);
  return r;
}, i = (r, o) => p(r, s(o));
import n, { forwardRef as c } from "react";
import l from "../lib/SSRBase.mjs";
import w from "../defs/RoadHorizon.mjs";
const z = c((r, o) => /* @__PURE__ */ n.createElement(l, i(m({ ref: o }, r), { weights: w })));
z.displayName = "RoadHorizon";
export {
  z as RoadHorizon
};
