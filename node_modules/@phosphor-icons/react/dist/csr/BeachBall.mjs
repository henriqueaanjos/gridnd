var l = Object.defineProperty, f = Object.defineProperties;
var i = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var t = (a, e, o) => e in a ? l(a, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : a[e] = o, m = (a, e) => {
  for (var o in e || (e = {}))
    p.call(e, o) && t(a, o, e[o]);
  if (r)
    for (var o of r(e))
      s.call(e, o) && t(a, o, e[o]);
  return a;
}, c = (a, e) => f(a, i(e));
import B, { forwardRef as h } from "react";
import n from "../lib/IconBase.mjs";
import d from "../defs/BeachBall.mjs";
const w = h((a, e) => /* @__PURE__ */ B.createElement(n, c(m({ ref: e }, a), { weights: d })));
w.displayName = "BeachBall";
export {
  w as BeachBall
};
