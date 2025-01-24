var c = Object.defineProperty, f = Object.defineProperties;
var h = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var t = (r, e, a) => e in r ? c(r, e, { enumerable: !0, configurable: !0, writable: !0, value: a }) : r[e] = a, m = (r, e) => {
  for (var a in e || (e = {}))
    p.call(e, a) && t(r, a, e[a]);
  if (o)
    for (var a of o(e))
      s.call(e, a) && t(r, a, e[a]);
  return r;
}, i = (r, e) => f(r, h(e));
import l, { forwardRef as R } from "react";
import d from "../lib/SSRBase.mjs";
import n from "../defs/Wheelchair.mjs";
const w = R((r, e) => /* @__PURE__ */ l.createElement(d, i(m({ ref: e }, r), { weights: n })));
w.displayName = "Wheelchair";
export {
  w as Wheelchair
};
