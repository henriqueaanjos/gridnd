var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var a = (r, t, e) => t in r ? f(r, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[t] = e, m = (r, t) => {
  for (var e in t || (t = {}))
    s.call(t, e) && a(r, e, t[e]);
  if (o)
    for (var e of o(t))
      n.call(t, e) && a(r, e, t[e]);
  return r;
}, c = (r, t) => i(r, p(t));
import b, { forwardRef as d } from "react";
import l from "../lib/IconBase.mjs";
import u from "../defs/Subtract.mjs";
const w = d((r, t) => /* @__PURE__ */ b.createElement(l, c(m({ ref: t }, r), { weights: u })));
w.displayName = "Subtract";
export {
  w as Subtract
};
