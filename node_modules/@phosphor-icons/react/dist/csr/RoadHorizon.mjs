var f = Object.defineProperty, n = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var t = (r, o, e) => o in r ? f(r, o, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[o] = e, m = (r, o) => {
  for (var e in o || (o = {}))
    s.call(o, e) && t(r, e, o[e]);
  if (a)
    for (var e of a(o))
      c.call(o, e) && t(r, e, o[e]);
  return r;
}, i = (r, o) => n(r, p(o));
import d, { forwardRef as R } from "react";
import l from "../lib/IconBase.mjs";
import w from "../defs/RoadHorizon.mjs";
const z = R((r, o) => /* @__PURE__ */ d.createElement(l, i(m({ ref: o }, r), { weights: w })));
z.displayName = "RoadHorizon";
export {
  z as RoadHorizon
};
