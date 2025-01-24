var p = Object.defineProperty, f = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var t = (r, e, a) => e in r ? p(r, e, { enumerable: !0, configurable: !0, writable: !0, value: a }) : r[e] = a, m = (r, e) => {
  for (var a in e || (e = {}))
    l.call(e, a) && t(r, a, e[a]);
  if (o)
    for (var a of o(e))
      n.call(e, a) && t(r, a, e[a]);
  return r;
}, i = (r, e) => f(r, s(e));
import c, { forwardRef as R } from "react";
import d from "../lib/SSRBase.mjs";
import w from "../defs/Airplane.mjs";
const A = R((r, e) => /* @__PURE__ */ c.createElement(d, i(m({ ref: e }, r), { weights: w })));
A.displayName = "Airplane";
export {
  A as Airplane
};
