var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var d = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var t = (r, e, a) => e in r ? i(r, e, { enumerable: !0, configurable: !0, writable: !0, value: a }) : r[e] = a, m = (r, e) => {
  for (var a in e || (e = {}))
    d.call(e, a) && t(r, a, e[a]);
  if (o)
    for (var a of o(e))
      c.call(e, a) && t(r, a, e[a]);
  return r;
}, f = (r, e) => p(r, s(e));
import B, { forwardRef as R } from "react";
import l from "../lib/SSRBase.mjs";
import n from "../defs/Bread.mjs";
const w = R((r, e) => /* @__PURE__ */ B.createElement(l, f(m({ ref: e }, r), { weights: n })));
w.displayName = "Bread";
export {
  w as Bread
};
