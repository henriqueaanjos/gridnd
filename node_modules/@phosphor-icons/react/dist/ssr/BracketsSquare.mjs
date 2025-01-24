var c = Object.defineProperty, f = Object.defineProperties;
var i = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, S = Object.prototype.propertyIsEnumerable;
var o = (r, e, a) => e in r ? c(r, e, { enumerable: !0, configurable: !0, writable: !0, value: a }) : r[e] = a, m = (r, e) => {
  for (var a in e || (e = {}))
    p.call(e, a) && o(r, a, e[a]);
  if (t)
    for (var a of t(e))
      S.call(e, a) && o(r, a, e[a]);
  return r;
}, s = (r, e) => f(r, i(e));
import B, { forwardRef as R } from "react";
import d from "../lib/SSRBase.mjs";
import k from "../defs/BracketsSquare.mjs";
const l = R((r, e) => /* @__PURE__ */ B.createElement(d, s(m({ ref: e }, r), { weights: k })));
l.displayName = "BracketsSquare";
export {
  l as BracketsSquare
};
