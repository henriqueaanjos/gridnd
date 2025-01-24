var s = Object.defineProperty, c = Object.defineProperties;
var w = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var f = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var m = (r, o, e) => o in r ? s(r, o, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[o] = e, a = (r, o) => {
  for (var e in o || (o = {}))
    f.call(o, e) && m(r, e, o[e]);
  if (t)
    for (var e of t(o))
      n.call(o, e) && m(r, e, o[e]);
  return r;
}, i = (r, o) => c(r, w(o));
import p, { forwardRef as l } from "react";
import C from "../lib/IconBase.mjs";
import d from "../defs/ArrowCounterClockwise.mjs";
const k = l((r, o) => /* @__PURE__ */ p.createElement(C, i(a({ ref: o }, r), { weights: d })));
k.displayName = "ArrowCounterClockwise";
export {
  k as ArrowCounterClockwise
};
