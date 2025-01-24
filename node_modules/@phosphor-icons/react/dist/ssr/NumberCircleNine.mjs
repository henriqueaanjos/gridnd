var c = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var i = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, N = Object.prototype.propertyIsEnumerable;
var o = (r, e, m) => e in r ? c(r, e, { enumerable: !0, configurable: !0, writable: !0, value: m }) : r[e] = m, t = (r, e) => {
  for (var m in e || (e = {}))
    s.call(e, m) && o(r, m, e[m]);
  if (i)
    for (var m of i(e))
      N.call(e, m) && o(r, m, e[m]);
  return r;
}, a = (r, e) => f(r, p(e));
import l, { forwardRef as n } from "react";
import R from "../lib/SSRBase.mjs";
import b from "../defs/NumberCircleNine.mjs";
const d = n((r, e) => /* @__PURE__ */ l.createElement(R, a(t({ ref: e }, r), { weights: b })));
d.displayName = "NumberCircleNine";
export {
  d as NumberCircleNine
};
