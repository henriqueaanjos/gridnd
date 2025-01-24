var p = Object.defineProperty, c = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var o = (r, e, t) => e in r ? p(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t, m = (r, e) => {
  for (var t in e || (e = {}))
    s.call(e, t) && o(r, t, e[t]);
  if (a)
    for (var t of a(e))
      l.call(e, t) && o(r, t, e[t]);
  return r;
}, i = (r, e) => c(r, f(e));
import C, { forwardRef as R } from "react";
import d from "../lib/SSRBase.mjs";
import n from "../defs/CaretCircleUp.mjs";
const w = R((r, e) => /* @__PURE__ */ C.createElement(d, i(m({ ref: e }, r), { weights: n })));
w.displayName = "CaretCircleUp";
export {
  w as CaretCircleUp
};
