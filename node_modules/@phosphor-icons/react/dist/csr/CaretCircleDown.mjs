var c = Object.defineProperty, f = Object.defineProperties;
var n = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var a = (r, e, o) => e in r ? c(r, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[e] = o, m = (r, e) => {
  for (var o in e || (e = {}))
    p.call(e, o) && a(r, o, e[o]);
  if (t)
    for (var o of t(e))
      s.call(e, o) && a(r, o, e[o]);
  return r;
}, i = (r, e) => f(r, n(e));
import l, { forwardRef as w } from "react";
import C from "../lib/IconBase.mjs";
import d from "../defs/CaretCircleDown.mjs";
const D = w((r, e) => /* @__PURE__ */ l.createElement(C, i(m({ ref: e }, r), { weights: d })));
D.displayName = "CaretCircleDown";
export {
  D as CaretCircleDown
};
