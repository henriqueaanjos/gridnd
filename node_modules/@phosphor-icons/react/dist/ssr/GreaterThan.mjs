var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var n = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var o = (r, e, a) => e in r ? i(r, e, { enumerable: !0, configurable: !0, writable: !0, value: a }) : r[e] = a, m = (r, e) => {
  for (var a in e || (e = {}))
    n.call(e, a) && o(r, a, e[a]);
  if (t)
    for (var a of t(e))
      c.call(e, a) && o(r, a, e[a]);
  return r;
}, f = (r, e) => p(r, s(e));
import h, { forwardRef as R } from "react";
import d from "../lib/SSRBase.mjs";
import l from "../defs/GreaterThan.mjs";
const w = R((r, e) => /* @__PURE__ */ h.createElement(d, f(m({ ref: e }, r), { weights: l })));
w.displayName = "GreaterThan";
export {
  w as GreaterThan
};
