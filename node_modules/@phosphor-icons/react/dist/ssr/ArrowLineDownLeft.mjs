var i = Object.defineProperty, n = Object.defineProperties;
var w = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var m = (r, e, o) => e in r ? i(r, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[e] = o, a = (r, e) => {
  for (var o in e || (e = {}))
    p.call(e, o) && m(r, o, e[o]);
  if (t)
    for (var o of t(e))
      s.call(e, o) && m(r, o, e[o]);
  return r;
}, f = (r, e) => n(r, w(e));
import L, { forwardRef as c } from "react";
import R from "../lib/SSRBase.mjs";
import d from "../defs/ArrowLineDownLeft.mjs";
const l = c((r, e) => /* @__PURE__ */ L.createElement(R, f(a({ ref: e }, r), { weights: d })));
l.displayName = "ArrowLineDownLeft";
export {
  l as ArrowLineDownLeft
};
