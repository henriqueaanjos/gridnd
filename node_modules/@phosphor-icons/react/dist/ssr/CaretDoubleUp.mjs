var f = Object.defineProperty, i = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var a = (r, e, o) => e in r ? f(r, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[e] = o, m = (r, e) => {
  for (var o in e || (e = {}))
    l.call(e, o) && a(r, o, e[o]);
  if (t)
    for (var o of t(e))
      c.call(e, o) && a(r, o, e[o]);
  return r;
}, p = (r, e) => i(r, s(e));
import R, { forwardRef as b } from "react";
import d from "../lib/SSRBase.mjs";
import n from "../defs/CaretDoubleUp.mjs";
const u = b((r, e) => /* @__PURE__ */ R.createElement(d, p(m({ ref: e }, r), { weights: n })));
u.displayName = "CaretDoubleUp";
export {
  u as CaretDoubleUp
};
