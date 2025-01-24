var i = Object.defineProperty, s = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var t = (r, e, a) => e in r ? i(r, e, { enumerable: !0, configurable: !0, writable: !0, value: a }) : r[e] = a, m = (r, e) => {
  for (var a in e || (e = {}))
    l.call(e, a) && t(r, a, e[a]);
  if (o)
    for (var a of o(e))
      c.call(e, a) && t(r, a, e[a]);
  return r;
}, p = (r, e) => s(r, f(e));
import x, { forwardRef as E } from "react";
import R from "../lib/SSRBase.mjs";
import d from "../defs/ApproximateEquals.mjs";
const n = E((r, e) => /* @__PURE__ */ x.createElement(R, p(m({ ref: e }, r), { weights: d })));
n.displayName = "ApproximateEquals";
export {
  n as ApproximateEquals
};
