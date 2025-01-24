var l = Object.defineProperty, f = Object.defineProperties;
var i = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var r = (a, e, t) => e in a ? l(a, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : a[e] = t, m = (a, e) => {
  for (var t in e || (e = {}))
    p.call(e, t) && r(a, t, e[t]);
  if (o)
    for (var t of o(e))
      c.call(e, t) && r(a, t, e[t]);
  return a;
}, s = (a, e) => f(a, i(e));
import n, { forwardRef as B } from "react";
import b from "../lib/IconBase.mjs";
import d from "../defs/Basketball.mjs";
const k = B((a, e) => /* @__PURE__ */ n.createElement(b, s(m({ ref: e }, a), { weights: d })));
k.displayName = "Basketball";
export {
  k as Basketball
};
