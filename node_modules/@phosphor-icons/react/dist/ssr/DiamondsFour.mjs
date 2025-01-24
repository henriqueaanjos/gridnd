var s = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var m = Object.getOwnPropertySymbols;
var d = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var a = (r, o, e) => o in r ? s(r, o, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[o] = e, t = (r, o) => {
  for (var e in o || (o = {}))
    d.call(o, e) && a(r, e, o[e]);
  if (m)
    for (var e of m(o))
      n.call(o, e) && a(r, e, o[e]);
  return r;
}, i = (r, o) => f(r, p(o));
import c, { forwardRef as R } from "react";
import l from "../lib/SSRBase.mjs";
import u from "../defs/DiamondsFour.mjs";
const w = R((r, o) => /* @__PURE__ */ c.createElement(l, i(t({ ref: o }, r), { weights: u })));
w.displayName = "DiamondsFour";
export {
  w as DiamondsFour
};
