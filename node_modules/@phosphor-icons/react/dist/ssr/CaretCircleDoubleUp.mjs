var p = Object.defineProperty, l = Object.defineProperties;
var c = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var f = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var a = (r, e, o) => e in r ? p(r, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[e] = o, m = (r, e) => {
  for (var o in e || (e = {}))
    f.call(e, o) && a(r, o, e[o]);
  if (t)
    for (var o of t(e))
      s.call(e, o) && a(r, o, e[o]);
  return r;
}, i = (r, e) => l(r, c(e));
import C, { forwardRef as R } from "react";
import b from "../lib/SSRBase.mjs";
import d from "../defs/CaretCircleDoubleUp.mjs";
const n = R((r, e) => /* @__PURE__ */ C.createElement(b, i(m({ ref: e }, r), { weights: d })));
n.displayName = "CaretCircleDoubleUp";
export {
  n as CaretCircleDoubleUp
};
