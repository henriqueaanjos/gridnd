var f = Object.defineProperty, i = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var n = Object.prototype.hasOwnProperty, w = Object.prototype.propertyIsEnumerable;
var a = (r, e, o) => e in r ? f(r, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[e] = o, m = (r, e) => {
  for (var o in e || (e = {}))
    n.call(e, o) && a(r, o, e[o]);
  if (t)
    for (var o of t(e))
      w.call(e, o) && a(r, o, e[o]);
  return r;
}, p = (r, e) => i(r, s(e));
import c, { forwardRef as R } from "react";
import d from "../lib/SSRBase.mjs";
import l from "../defs/CaretUpDown.mjs";
const C = R((r, e) => /* @__PURE__ */ c.createElement(d, p(m({ ref: e }, r), { weights: l })));
C.displayName = "CaretUpDown";
export {
  C as CaretUpDown
};
