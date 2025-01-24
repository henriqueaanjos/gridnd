var p = Object.defineProperty, c = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var m = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var t = (r, e, o) => e in r ? p(r, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[e] = o, a = (r, e) => {
  for (var o in e || (e = {}))
    s.call(e, o) && t(r, o, e[o]);
  if (m)
    for (var o of m(e))
      l.call(e, o) && t(r, o, e[o]);
  return r;
}, i = (r, e) => c(r, f(e));
import n, { forwardRef as S } from "react";
import h from "../lib/SSRBase.mjs";
import R from "../defs/AnchorSimple.mjs";
const d = S((r, e) => /* @__PURE__ */ n.createElement(h, i(a({ ref: e }, r), { weights: R })));
d.displayName = "AnchorSimple";
export {
  d as AnchorSimple
};
