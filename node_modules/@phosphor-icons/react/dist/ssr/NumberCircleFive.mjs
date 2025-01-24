var c = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var i = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var o = (r, e, m) => e in r ? c(r, e, { enumerable: !0, configurable: !0, writable: !0, value: m }) : r[e] = m, t = (r, e) => {
  for (var m in e || (e = {}))
    s.call(e, m) && o(r, m, e[m]);
  if (i)
    for (var m of i(e))
      l.call(e, m) && o(r, m, e[m]);
  return r;
}, a = (r, e) => f(r, p(e));
import N, { forwardRef as R } from "react";
import b from "../lib/SSRBase.mjs";
import d from "../defs/NumberCircleFive.mjs";
const n = R((r, e) => /* @__PURE__ */ N.createElement(b, a(t({ ref: e }, r), { weights: d })));
n.displayName = "NumberCircleFive";
export {
  n as NumberCircleFive
};
