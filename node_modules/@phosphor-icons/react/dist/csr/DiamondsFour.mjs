var s = Object.defineProperty, f = Object.defineProperties;
var n = Object.getOwnPropertyDescriptors;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var a = (r, o, e) => o in r ? s(r, o, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[o] = e, t = (r, o) => {
  for (var e in o || (o = {}))
    p.call(o, e) && a(r, e, o[e]);
  if (m)
    for (var e of m(o))
      c.call(o, e) && a(r, e, o[e]);
  return r;
}, i = (r, o) => f(r, n(o));
import d, { forwardRef as l } from "react";
import u from "../lib/IconBase.mjs";
import w from "../defs/DiamondsFour.mjs";
const D = l((r, o) => /* @__PURE__ */ d.createElement(u, i(t({ ref: o }, r), { weights: w })));
D.displayName = "DiamondsFour";
export {
  D as DiamondsFour
};
