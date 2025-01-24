var s = Object.defineProperty, w = Object.defineProperties;
var c = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var f = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var m = (o, r, e) => r in o ? s(o, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : o[r] = e, a = (o, r) => {
  for (var e in r || (r = {}))
    f.call(r, e) && m(o, e, r[e]);
  if (t)
    for (var e of t(r))
      p.call(r, e) && m(o, e, r[e]);
  return o;
}, i = (o, r) => w(o, c(r));
import l, { forwardRef as n } from "react";
import C from "../lib/SSRBase.mjs";
import R from "../defs/ArrowCounterClockwise.mjs";
const d = n((o, r) => /* @__PURE__ */ l.createElement(C, i(a({ ref: r }, o), { weights: R })));
d.displayName = "ArrowCounterClockwise";
export {
  d as ArrowCounterClockwise
};
