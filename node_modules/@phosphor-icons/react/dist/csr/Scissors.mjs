var i = Object.defineProperty, c = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var e = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var t = (r, o, s) => o in r ? i(r, o, { enumerable: !0, configurable: !0, writable: !0, value: s }) : r[o] = s, m = (r, o) => {
  for (var s in o || (o = {}))
    p.call(o, s) && t(r, s, o[s]);
  if (e)
    for (var s of e(o))
      n.call(o, s) && t(r, s, o[s]);
  return r;
}, a = (r, o) => c(r, f(o));
import d, { forwardRef as l } from "react";
import w from "../lib/IconBase.mjs";
import I from "../defs/Scissors.mjs";
const R = l((r, o) => /* @__PURE__ */ d.createElement(w, a(m({ ref: o }, r), { weights: I })));
R.displayName = "Scissors";
export {
  R as Scissors
};
