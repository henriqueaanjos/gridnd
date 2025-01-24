var s = Object.defineProperty, c = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var t = (e, r, a) => r in e ? s(e, r, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[r] = a, m = (e, r) => {
  for (var a in r || (r = {}))
    p.call(r, a) && t(e, a, r[a]);
  if (o)
    for (var a of o(r))
      d.call(r, a) && t(e, a, r[a]);
  return e;
}, i = (e, r) => c(e, f(r));
import l, { forwardRef as w } from "react";
import F from "../lib/SSRBase.mjs";
import R from "../defs/FastForwardCircle.mjs";
const n = w((e, r) => /* @__PURE__ */ l.createElement(F, i(m({ ref: r }, e), { weights: R })));
n.displayName = "FastForwardCircle";
export {
  n as FastForwardCircle
};
