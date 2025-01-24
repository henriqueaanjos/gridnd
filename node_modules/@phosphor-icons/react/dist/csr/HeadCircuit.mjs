var c = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var a = (r, e, t) => e in r ? c(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t, i = (r, e) => {
  for (var t in e || (e = {}))
    s.call(e, t) && a(r, t, e[t]);
  if (o)
    for (var t of o(e))
      d.call(e, t) && a(r, t, e[t]);
  return r;
}, m = (r, e) => f(r, p(e));
import n, { forwardRef as l } from "react";
import u from "../lib/IconBase.mjs";
import w from "../defs/HeadCircuit.mjs";
const C = l((r, e) => /* @__PURE__ */ n.createElement(u, m(i({ ref: e }, r), { weights: w })));
C.displayName = "HeadCircuit";
export {
  C as HeadCircuit
};
