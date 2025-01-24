var i = Object.defineProperty, w = Object.defineProperties;
var c = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var f = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var s = (o, r, e) => r in o ? i(o, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : o[r] = e, m = (o, r) => {
  for (var e in r || (r = {}))
    f.call(r, e) && s(o, e, r[e]);
  if (t)
    for (var e of t(r))
      p.call(r, e) && s(o, e, r[e]);
  return o;
}, a = (o, r) => w(o, c(r));
import l, { forwardRef as n } from "react";
import C from "../lib/SSRBase.mjs";
import R from "../defs/ArrowsCounterClockwise.mjs";
const d = n((o, r) => /* @__PURE__ */ l.createElement(C, a(m({ ref: r }, o), { weights: R })));
d.displayName = "ArrowsCounterClockwise";
export {
  d as ArrowsCounterClockwise
};
