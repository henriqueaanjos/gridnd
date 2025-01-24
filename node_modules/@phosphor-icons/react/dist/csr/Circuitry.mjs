var c = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var i = (t, r, e) => r in t ? c(t, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[r] = e, m = (t, r) => {
  for (var e in r || (r = {}))
    s.call(r, e) && i(t, e, r[e]);
  if (o)
    for (var e of o(r))
      n.call(r, e) && i(t, e, r[e]);
  return t;
}, a = (t, r) => f(t, p(r));
import y, { forwardRef as d } from "react";
import l from "../lib/IconBase.mjs";
import u from "../defs/Circuitry.mjs";
const w = d((t, r) => /* @__PURE__ */ y.createElement(l, a(m({ ref: r }, t), { weights: u })));
w.displayName = "Circuitry";
export {
  w as Circuitry
};
