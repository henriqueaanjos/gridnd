var p = Object.defineProperty, c = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var n = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var a = (r, e, o) => e in r ? p(r, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[e] = o, m = (r, e) => {
  for (var o in e || (e = {}))
    n.call(e, o) && a(r, o, e[o]);
  if (t)
    for (var o of t(e))
      s.call(e, o) && a(r, o, e[o]);
  return r;
}, i = (r, e) => c(r, f(e));
import l, { forwardRef as w } from "react";
import C from "../lib/IconBase.mjs";
import d from "../defs/CaretCircleUpDown.mjs";
const D = w((r, e) => /* @__PURE__ */ l.createElement(C, i(m({ ref: e }, r), { weights: d })));
D.displayName = "CaretCircleUpDown";
export {
  D as CaretCircleUpDown
};
