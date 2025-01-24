var c = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var t = (r, e, a) => e in r ? c(r, e, { enumerable: !0, configurable: !0, writable: !0, value: a }) : r[e] = a, m = (r, e) => {
  for (var a in e || (e = {}))
    s.call(e, a) && t(r, a, e[a]);
  if (o)
    for (var a of o(e))
      l.call(e, a) && t(r, a, e[a]);
  return r;
}, i = (r, e) => f(r, p(e));
import n, { forwardRef as S } from "react";
import g from "../lib/SSRBase.mjs";
import y from "../defs/FlyingSaucer.mjs";
const R = S((r, e) => /* @__PURE__ */ n.createElement(g, i(m({ ref: e }, r), { weights: y })));
R.displayName = "FlyingSaucer";
export {
  R as FlyingSaucer
};
