var i = Object.defineProperty, f = Object.defineProperties;
var n = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var t = (e, o, r) => o in e ? i(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, l = (e, o) => {
  for (var r in o || (o = {}))
    p.call(o, r) && t(e, r, o[r]);
  if (a)
    for (var r of a(o))
      s.call(o, r) && t(e, r, o[r]);
  return e;
}, m = (e, o) => f(e, n(o));
import B, { forwardRef as c } from "react";
import w from "../lib/IconBase.mjs";
import g from "../defs/BowlingBall.mjs";
const d = c((e, o) => /* @__PURE__ */ B.createElement(w, m(l({ ref: o }, e), { weights: g })));
d.displayName = "BowlingBall";
export {
  d as BowlingBall
};
