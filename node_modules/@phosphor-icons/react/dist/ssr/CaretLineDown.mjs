var n = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, w = Object.prototype.propertyIsEnumerable;
var a = (r, e, o) => e in r ? n(r, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[e] = o, m = (r, e) => {
  for (var o in e || (e = {}))
    s.call(e, o) && a(r, o, e[o]);
  if (t)
    for (var o of t(e))
      w.call(e, o) && a(r, o, e[o]);
  return r;
}, i = (r, e) => f(r, p(e));
import c, { forwardRef as R } from "react";
import d from "../lib/SSRBase.mjs";
import l from "../defs/CaretLineDown.mjs";
const C = R((r, e) => /* @__PURE__ */ c.createElement(d, i(m({ ref: e }, r), { weights: l })));
C.displayName = "CaretLineDown";
export {
  C as CaretLineDown
};
