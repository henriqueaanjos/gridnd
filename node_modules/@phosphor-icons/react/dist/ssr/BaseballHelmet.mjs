var s = Object.defineProperty, f = Object.defineProperties;
var i = Object.getOwnPropertyDescriptors;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var r = (a, e, t) => e in a ? s(a, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : a[e] = t, o = (a, e) => {
  for (var t in e || (e = {}))
    p.call(e, t) && r(a, t, e[t]);
  if (m)
    for (var t of m(e))
      c.call(e, t) && r(a, t, e[t]);
  return a;
}, l = (a, e) => f(a, i(e));
import B, { forwardRef as R } from "react";
import b from "../lib/SSRBase.mjs";
import d from "../defs/BaseballHelmet.mjs";
const n = R((a, e) => /* @__PURE__ */ B.createElement(b, l(o({ ref: e }, a), { weights: d })));
n.displayName = "BaseballHelmet";
export {
  n as BaseballHelmet
};
