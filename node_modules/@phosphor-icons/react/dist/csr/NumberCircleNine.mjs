var c = Object.defineProperty, f = Object.defineProperties;
var n = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var i = (r, e, m) => e in r ? c(r, e, { enumerable: !0, configurable: !0, writable: !0, value: m }) : r[e] = m, t = (r, e) => {
  for (var m in e || (e = {}))
    p.call(e, m) && i(r, m, e[m]);
  if (o)
    for (var m of o(e))
      s.call(e, m) && i(r, m, e[m]);
  return r;
}, a = (r, e) => f(r, n(e));
import N, { forwardRef as l } from "react";
import b from "../lib/IconBase.mjs";
import d from "../defs/NumberCircleNine.mjs";
const u = l((r, e) => /* @__PURE__ */ N.createElement(b, a(t({ ref: e }, r), { weights: d })));
u.displayName = "NumberCircleNine";
export {
  u as NumberCircleNine
};
