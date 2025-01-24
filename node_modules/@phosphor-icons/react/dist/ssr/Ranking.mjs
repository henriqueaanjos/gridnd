var n = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, R = Object.prototype.propertyIsEnumerable;
var t = (r, e, a) => e in r ? n(r, e, { enumerable: !0, configurable: !0, writable: !0, value: a }) : r[e] = a, m = (r, e) => {
  for (var a in e || (e = {}))
    s.call(e, a) && t(r, a, e[a]);
  if (o)
    for (var a of o(e))
      R.call(e, a) && t(r, a, e[a]);
  return r;
}, i = (r, e) => f(r, p(e));
import c, { forwardRef as g } from "react";
import d from "../lib/SSRBase.mjs";
import k from "../defs/Ranking.mjs";
const l = g((r, e) => /* @__PURE__ */ c.createElement(d, i(m({ ref: e }, r), { weights: k })));
l.displayName = "Ranking";
export {
  l as Ranking
};
