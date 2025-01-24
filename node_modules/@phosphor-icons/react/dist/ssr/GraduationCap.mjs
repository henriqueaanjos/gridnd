var p = Object.defineProperty, f = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var d = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var e = (r, a, o) => a in r ? p(r, a, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[a] = o, m = (r, a) => {
  for (var o in a || (a = {}))
    d.call(a, o) && e(r, o, a[o]);
  if (t)
    for (var o of t(a))
      n.call(a, o) && e(r, o, a[o]);
  return r;
}, i = (r, a) => f(r, s(a));
import c, { forwardRef as R } from "react";
import l from "../lib/SSRBase.mjs";
import u from "../defs/GraduationCap.mjs";
const w = R((r, a) => /* @__PURE__ */ c.createElement(l, i(m({ ref: a }, r), { weights: u })));
w.displayName = "GraduationCap";
export {
  w as GraduationCap
};
