var i = Object.defineProperty, c = Object.defineProperties;
var w = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var f = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var s = (r, o, e) => o in r ? i(r, o, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[o] = e, m = (r, o) => {
  for (var e in o || (o = {}))
    f.call(o, e) && s(r, e, o[e]);
  if (t)
    for (var e of t(o))
      n.call(o, e) && s(r, e, o[e]);
  return r;
}, a = (r, o) => c(r, w(o));
import p, { forwardRef as l } from "react";
import C from "../lib/IconBase.mjs";
import d from "../defs/ArrowsCounterClockwise.mjs";
const k = l((r, o) => /* @__PURE__ */ p.createElement(C, a(m({ ref: o }, r), { weights: d })));
k.displayName = "ArrowsCounterClockwise";
export {
  k as ArrowsCounterClockwise
};
