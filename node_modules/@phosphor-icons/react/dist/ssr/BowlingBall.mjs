var i = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, B = Object.prototype.propertyIsEnumerable;
var t = (e, o, r) => o in e ? i(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, l = (e, o) => {
  for (var r in o || (o = {}))
    s.call(o, r) && t(e, r, o[r]);
  if (a)
    for (var r of a(o))
      B.call(o, r) && t(e, r, o[r]);
  return e;
}, m = (e, o) => f(e, p(o));
import n, { forwardRef as w } from "react";
import c from "../lib/SSRBase.mjs";
import g from "../defs/BowlingBall.mjs";
const R = w((e, o) => /* @__PURE__ */ n.createElement(c, m(l({ ref: o }, e), { weights: g })));
R.displayName = "BowlingBall";
export {
  R as BowlingBall
};
