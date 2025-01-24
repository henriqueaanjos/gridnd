var c = Object.defineProperty, f = Object.defineProperties;
var i = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var o = (r, e, a) => e in r ? c(r, e, { enumerable: !0, configurable: !0, writable: !0, value: a }) : r[e] = a, m = (r, e) => {
  for (var a in e || (e = {}))
    p.call(e, a) && o(r, a, e[a]);
  if (t)
    for (var a of t(e))
      n.call(e, a) && o(r, a, e[a]);
  return r;
}, s = (r, e) => f(r, i(e));
import B, { forwardRef as d } from "react";
import k from "../lib/IconBase.mjs";
import l from "../defs/BracketsSquare.mjs";
const q = d((r, e) => /* @__PURE__ */ B.createElement(k, s(m({ ref: e }, r), { weights: l })));
q.displayName = "BracketsSquare";
export {
  q as BracketsSquare
};
