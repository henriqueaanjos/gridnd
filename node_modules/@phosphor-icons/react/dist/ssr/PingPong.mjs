var n = Object.defineProperty, f = Object.defineProperties;
var g = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var m = (e, o, r) => o in e ? n(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, a = (e, o) => {
  for (var r in o || (o = {}))
    p.call(o, r) && m(e, r, o[r]);
  if (t)
    for (var r of t(o))
      s.call(o, r) && m(e, r, o[r]);
  return e;
}, i = (e, o) => f(e, g(o));
import P, { forwardRef as c } from "react";
import R from "../lib/SSRBase.mjs";
import d from "../defs/PingPong.mjs";
const l = c((e, o) => /* @__PURE__ */ P.createElement(R, i(a({ ref: o }, e), { weights: d })));
l.displayName = "PingPong";
export {
  l as PingPong
};
