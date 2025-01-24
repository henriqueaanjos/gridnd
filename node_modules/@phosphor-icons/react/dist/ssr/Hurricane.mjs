var c = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var t = (e, r, a) => r in e ? c(e, r, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[r] = a, m = (e, r) => {
  for (var a in r || (r = {}))
    s.call(r, a) && t(e, a, r[a]);
  if (o)
    for (var a of o(r))
      n.call(r, a) && t(e, a, r[a]);
  return e;
}, i = (e, r) => f(e, p(r));
import R, { forwardRef as d } from "react";
import l from "../lib/SSRBase.mjs";
import u from "../defs/Hurricane.mjs";
const w = d((e, r) => /* @__PURE__ */ R.createElement(l, i(m({ ref: r }, e), { weights: u })));
w.displayName = "Hurricane";
export {
  w as Hurricane
};
