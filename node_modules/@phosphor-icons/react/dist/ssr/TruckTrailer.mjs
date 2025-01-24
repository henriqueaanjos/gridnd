var c = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var t = (e, r, a) => r in e ? c(e, r, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[r] = a, m = (e, r) => {
  for (var a in r || (r = {}))
    s.call(r, a) && t(e, a, r[a]);
  if (o)
    for (var a of o(r))
      l.call(r, a) && t(e, a, r[a]);
  return e;
}, i = (e, r) => f(e, p(r));
import T, { forwardRef as R } from "react";
import d from "../lib/SSRBase.mjs";
import k from "../defs/TruckTrailer.mjs";
const n = R((e, r) => /* @__PURE__ */ T.createElement(d, i(m({ ref: r }, e), { weights: k })));
n.displayName = "TruckTrailer";
export {
  n as TruckTrailer
};
