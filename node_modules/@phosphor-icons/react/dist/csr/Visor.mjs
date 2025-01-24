var s = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var m = (r, o, e) => o in r ? s(r, o, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[o] = e, a = (r, o) => {
  for (var e in o || (o = {}))
    c.call(o, e) && m(r, e, o[e]);
  if (t)
    for (var e of t(o))
      n.call(o, e) && m(r, e, o[e]);
  return r;
}, i = (r, o) => f(r, p(o));
import d, { forwardRef as l } from "react";
import w from "../lib/IconBase.mjs";
import I from "../defs/Visor.mjs";
const R = l((r, o) => /* @__PURE__ */ d.createElement(w, i(a({ ref: o }, r), { weights: I })));
R.displayName = "Visor";
export {
  R as Visor
};
