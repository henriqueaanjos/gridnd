var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var t = (r, e, a) => e in r ? i(r, e, { enumerable: !0, configurable: !0, writable: !0, value: a }) : r[e] = a, m = (r, e) => {
  for (var a in e || (e = {}))
    c.call(e, a) && t(r, a, e[a]);
  if (o)
    for (var a of o(e))
      l.call(e, a) && t(r, a, e[a]);
  return r;
}, f = (r, e) => p(r, s(e));
import n, { forwardRef as d } from "react";
import q from "../lib/IconBase.mjs";
import u from "../defs/SquareHalf.mjs";
const w = d((r, e) => /* @__PURE__ */ n.createElement(q, f(m({ ref: e }, r), { weights: u })));
w.displayName = "SquareHalf";
export {
  w as SquareHalf
};
