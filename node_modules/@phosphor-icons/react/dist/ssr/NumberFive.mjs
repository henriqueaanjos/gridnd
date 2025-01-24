var f = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, N = Object.prototype.propertyIsEnumerable;
var t = (r, e, m) => e in r ? f(r, e, { enumerable: !0, configurable: !0, writable: !0, value: m }) : r[e] = m, a = (r, e) => {
  for (var m in e || (e = {}))
    c.call(e, m) && t(r, m, e[m]);
  if (o)
    for (var m of o(e))
      N.call(e, m) && t(r, m, e[m]);
  return r;
}, i = (r, e) => p(r, s(e));
import R, { forwardRef as b } from "react";
import d from "../lib/SSRBase.mjs";
import l from "../defs/NumberFive.mjs";
const n = b((r, e) => /* @__PURE__ */ R.createElement(d, i(a({ ref: e }, r), { weights: l })));
n.displayName = "NumberFive";
export {
  n as NumberFive
};
