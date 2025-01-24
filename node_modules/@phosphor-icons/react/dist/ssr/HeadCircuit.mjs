var c = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var i = (r, e, t) => e in r ? c(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t, o = (r, e) => {
  for (var t in e || (e = {}))
    s.call(e, t) && i(r, t, e[t]);
  if (a)
    for (var t of a(e))
      d.call(e, t) && i(r, t, e[t]);
  return r;
}, m = (r, e) => f(r, p(e));
import R, { forwardRef as l } from "react";
import n from "../lib/SSRBase.mjs";
import u from "../defs/HeadCircuit.mjs";
const w = l((r, e) => /* @__PURE__ */ R.createElement(n, m(o({ ref: e }, r), { weights: u })));
w.displayName = "HeadCircuit";
export {
  w as HeadCircuit
};
