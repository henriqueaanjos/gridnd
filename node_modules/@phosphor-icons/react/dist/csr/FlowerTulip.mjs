var p = Object.defineProperty, l = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var m = (o, e, r) => e in o ? p(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, a = (o, e) => {
  for (var r in e || (e = {}))
    s.call(e, r) && m(o, r, e[r]);
  if (t)
    for (var r of t(e))
      c.call(e, r) && m(o, r, e[r]);
  return o;
}, i = (o, e) => l(o, f(e));
import w, { forwardRef as n } from "react";
import d from "../lib/IconBase.mjs";
import u from "../defs/FlowerTulip.mjs";
const F = n((o, e) => /* @__PURE__ */ w.createElement(d, i(a({ ref: e }, o), { weights: u })));
F.displayName = "FlowerTulip";
export {
  F as FlowerTulip
};
