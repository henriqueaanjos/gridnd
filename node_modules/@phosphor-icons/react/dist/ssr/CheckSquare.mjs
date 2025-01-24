var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, S = Object.prototype.propertyIsEnumerable;
var t = (r, e, a) => e in r ? f(r, e, { enumerable: !0, configurable: !0, writable: !0, value: a }) : r[e] = a, m = (r, e) => {
  for (var a in e || (e = {}))
    s.call(e, a) && t(r, a, e[a]);
  if (o)
    for (var a of o(e))
      S.call(e, a) && t(r, a, e[a]);
  return r;
}, c = (r, e) => i(r, p(e));
import h, { forwardRef as R } from "react";
import d from "../lib/SSRBase.mjs";
import k from "../defs/CheckSquare.mjs";
const l = R((r, e) => /* @__PURE__ */ h.createElement(d, c(m({ ref: e }, r), { weights: k })));
l.displayName = "CheckSquare";
export {
  l as CheckSquare
};
