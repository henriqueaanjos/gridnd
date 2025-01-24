var l = Object.defineProperty, f = Object.defineProperties;
var i = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var o = (a, e, t) => e in a ? l(a, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : a[e] = t, m = (a, e) => {
  for (var t in e || (e = {}))
    p.call(e, t) && o(a, t, e[t]);
  if (r)
    for (var t of r(e))
      c.call(e, t) && o(a, t, e[t]);
  return a;
}, s = (a, e) => f(a, i(e));
import B, { forwardRef as R } from "react";
import b from "../lib/SSRBase.mjs";
import d from "../defs/Basketball.mjs";
const k = R((a, e) => /* @__PURE__ */ B.createElement(b, s(m({ ref: e }, a), { weights: d })));
k.displayName = "Basketball";
export {
  k as Basketball
};
