var f = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var i = (m, o, e) => o in m ? f(m, o, { enumerable: !0, configurable: !0, writable: !0, value: e }) : m[o] = e, t = (m, o) => {
  for (var e in o || (o = {}))
    l.call(o, e) && i(m, e, o[e]);
  if (r)
    for (var e of r(o))
      n.call(o, e) && i(m, e, o[e]);
  return m;
}, a = (m, o) => p(m, s(o));
import w, { forwardRef as S } from "react";
import c from "../lib/SSRBase.mjs";
import g from "../defs/SwimmingPool.mjs";
const R = S((m, o) => /* @__PURE__ */ w.createElement(c, a(t({ ref: o }, m), { weights: g })));
R.displayName = "SwimmingPool";
export {
  R as SwimmingPool
};
