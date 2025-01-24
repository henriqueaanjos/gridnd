var n = Object.defineProperty, c = Object.defineProperties;
var i = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var m = (e, o, r) => o in e ? n(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, a = (e, o) => {
  for (var r in o || (o = {}))
    p.call(o, r) && m(e, r, o[r]);
  if (t)
    for (var r of t(o))
      s.call(o, r) && m(e, r, o[r]);
  return e;
}, f = (e, o) => c(e, i(o));
import l, { forwardRef as R } from "react";
import d from "../lib/SSRBase.mjs";
import k from "../defs/ClockAfternoon.mjs";
const w = R((e, o) => /* @__PURE__ */ l.createElement(d, f(a({ ref: o }, e), { weights: k })));
w.displayName = "ClockAfternoon";
export {
  w as ClockAfternoon
};
