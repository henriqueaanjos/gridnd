var s = Object.defineProperty, l = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var t = (e, a, r) => a in e ? s(e, a, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[a] = r, m = (e, a) => {
  for (var r in a || (a = {}))
    i.call(a, r) && t(e, r, a[r]);
  if (o)
    for (var r of o(a))
      c.call(a, r) && t(e, r, a[r]);
  return e;
}, p = (e, a) => l(e, f(a));
import B, { forwardRef as R } from "react";
import b from "../lib/SSRBase.mjs";
import d from "../defs/BaseballCap.mjs";
const n = R((e, a) => /* @__PURE__ */ B.createElement(b, p(m({ ref: a }, e), { weights: d })));
n.displayName = "BaseballCap";
export {
  n as BaseballCap
};
