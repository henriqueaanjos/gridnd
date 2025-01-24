var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var w = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var a = (t, r, e) => r in t ? i(t, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[r] = e, m = (t, r) => {
  for (var e in r || (r = {}))
    w.call(r, e) && a(t, e, r[e]);
  if (o)
    for (var e of o(r))
      c.call(r, e) && a(t, e, r[e]);
  return t;
}, f = (t, r) => p(t, s(r));
import R, { forwardRef as d } from "react";
import l from "../lib/SSRBase.mjs";
import n from "../defs/ArrowFatLeft.mjs";
const A = d((t, r) => /* @__PURE__ */ R.createElement(l, f(m({ ref: r }, t), { weights: n })));
A.displayName = "ArrowFatLeft";
export {
  A as ArrowFatLeft
};
