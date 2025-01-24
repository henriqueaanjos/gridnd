var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var t = (r, e, a) => e in r ? f(r, e, { enumerable: !0, configurable: !0, writable: !0, value: a }) : r[e] = a, m = (r, e) => {
  for (var a in e || (e = {}))
    s.call(e, a) && t(r, a, e[a]);
  if (o)
    for (var a of o(e))
      d.call(e, a) && t(r, a, e[a]);
  return r;
}, c = (r, e) => i(r, p(e));
import l, { forwardRef as u } from "react";
import S from "../lib/SSRBase.mjs";
import x from "../defs/ExcludeSquare.mjs";
const E = u((r, e) => /* @__PURE__ */ l.createElement(S, c(m({ ref: e }, r), { weights: x })));
E.displayName = "ExcludeSquare";
export {
  E as ExcludeSquare
};
