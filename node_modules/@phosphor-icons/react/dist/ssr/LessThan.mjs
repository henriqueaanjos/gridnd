var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var n = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var s = (r, e, a) => e in r ? f(r, e, { enumerable: !0, configurable: !0, writable: !0, value: a }) : r[e] = a, t = (r, e) => {
  for (var a in e || (e = {}))
    n.call(e, a) && s(r, a, e[a]);
  if (o)
    for (var a of o(e))
      c.call(e, a) && s(r, a, e[a]);
  return r;
}, m = (r, e) => i(r, p(e));
import h, { forwardRef as R } from "react";
import d from "../lib/SSRBase.mjs";
import l from "../defs/LessThan.mjs";
const w = R((r, e) => /* @__PURE__ */ h.createElement(d, m(t({ ref: e }, r), { weights: l })));
w.displayName = "LessThan";
export {
  w as LessThan
};
