var f = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var m = (r, e, o) => e in r ? f(r, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[e] = o, a = (r, e) => {
  for (var o in e || (e = {}))
    c.call(e, o) && m(r, o, e[o]);
  if (t)
    for (var o of t(e))
      n.call(e, o) && m(r, o, e[o]);
  return r;
}, i = (r, e) => p(r, s(e));
import B, { forwardRef as d } from "react";
import l from "../lib/IconBase.mjs";
import u from "../defs/BezierCurve.mjs";
const v = d((r, e) => /* @__PURE__ */ B.createElement(l, i(a({ ref: e }, r), { weights: u })));
v.displayName = "BezierCurve";
export {
  v as BezierCurve
};
