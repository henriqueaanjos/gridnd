var i = Object.defineProperty, c = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var p = (o, e, m) => e in o ? i(o, e, { enumerable: !0, configurable: !0, writable: !0, value: m }) : o[e] = m, t = (o, e) => {
  for (var m in e || (e = {}))
    s.call(e, m) && p(o, m, e[m]);
  if (r)
    for (var m of r(e))
      l.call(e, m) && p(o, m, e[m]);
  return o;
}, a = (o, e) => c(o, f(e));
import n, { forwardRef as S } from "react";
import R from "../lib/SSRBase.mjs";
import d from "../defs/LockSimpleOpen.mjs";
const k = S((o, e) => /* @__PURE__ */ n.createElement(R, a(t({ ref: e }, o), { weights: d })));
k.displayName = "LockSimpleOpen";
export {
  k as LockSimpleOpen
};
