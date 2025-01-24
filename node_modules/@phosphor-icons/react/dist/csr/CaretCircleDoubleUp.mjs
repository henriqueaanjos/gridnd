var p = Object.defineProperty, c = Object.defineProperties;
var l = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var f = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var a = (r, e, o) => e in r ? p(r, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[e] = o, m = (r, e) => {
  for (var o in e || (e = {}))
    f.call(e, o) && a(r, o, e[o]);
  if (t)
    for (var o of t(e))
      s.call(e, o) && a(r, o, e[o]);
  return r;
}, i = (r, e) => c(r, l(e));
import C, { forwardRef as n } from "react";
import b from "../lib/IconBase.mjs";
import d from "../defs/CaretCircleDoubleUp.mjs";
const u = n((r, e) => /* @__PURE__ */ C.createElement(b, i(m({ ref: e }, r), { weights: d })));
u.displayName = "CaretCircleDoubleUp";
export {
  u as CaretCircleDoubleUp
};
