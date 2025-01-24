var s = Object.defineProperty, c = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var n = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var t = (r, o, e) => o in r ? s(r, o, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[o] = e, m = (r, o) => {
  for (var e in o || (o = {}))
    n.call(o, e) && t(r, e, o[e]);
  if (a)
    for (var e of a(o))
      p.call(o, e) && t(r, e, o[e]);
  return r;
}, i = (r, o) => c(r, f(o));
import l, { forwardRef as B } from "react";
import d from "../lib/IconBase.mjs";
import u from "../defs/Binoculars.mjs";
const w = B((r, o) => /* @__PURE__ */ l.createElement(d, i(m({ ref: o }, r), { weights: u })));
w.displayName = "Binoculars";
export {
  w as Binoculars
};
