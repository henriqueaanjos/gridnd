var c = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var m = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var t = (r, e, o) => e in r ? c(r, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[e] = o, a = (r, e) => {
  for (var o in e || (e = {}))
    s.call(e, o) && t(r, o, e[o]);
  if (m)
    for (var o of m(e))
      l.call(e, o) && t(r, o, e[o]);
  return r;
}, i = (r, e) => f(r, p(e));
import w, { forwardRef as N } from "react";
import R from "../lib/SSRBase.mjs";
import b from "../defs/NumberCircleTwo.mjs";
const d = N((r, e) => /* @__PURE__ */ w.createElement(R, i(a({ ref: e }, r), { weights: b })));
d.displayName = "NumberCircleTwo";
export {
  d as NumberCircleTwo
};
