var c = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var t = (r, e, m) => e in r ? c(r, e, { enumerable: !0, configurable: !0, writable: !0, value: m }) : r[e] = m, a = (r, e) => {
  for (var m in e || (e = {}))
    s.call(e, m) && t(r, m, e[m]);
  if (o)
    for (var m of o(e))
      l.call(e, m) && t(r, m, e[m]);
  return r;
}, i = (r, e) => f(r, p(e));
import h, { forwardRef as N } from "react";
import R from "../lib/SSRBase.mjs";
import b from "../defs/NumberCircleThree.mjs";
const d = N((r, e) => /* @__PURE__ */ h.createElement(R, i(a({ ref: e }, r), { weights: b })));
d.displayName = "NumberCircleThree";
export {
  d as NumberCircleThree
};
