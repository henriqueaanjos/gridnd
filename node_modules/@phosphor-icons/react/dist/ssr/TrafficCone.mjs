var i = Object.defineProperty, c = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var f = (r, e, o) => e in r ? i(r, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[e] = o, t = (r, e) => {
  for (var o in e || (e = {}))
    s.call(e, o) && f(r, o, e[o]);
  if (a)
    for (var o of a(e))
      n.call(e, o) && f(r, o, e[o]);
  return r;
}, m = (r, e) => c(r, p(e));
import R, { forwardRef as d } from "react";
import l from "../lib/SSRBase.mjs";
import w from "../defs/TrafficCone.mjs";
const C = d((r, e) => /* @__PURE__ */ R.createElement(l, m(t({ ref: e }, r), { weights: w })));
C.displayName = "TrafficCone";
export {
  C as TrafficCone
};
