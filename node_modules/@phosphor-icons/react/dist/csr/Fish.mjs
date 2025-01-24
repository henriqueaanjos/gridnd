var s = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, h = Object.prototype.propertyIsEnumerable;
var m = (o, e, r) => e in o ? s(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, a = (o, e) => {
  for (var r in e || (e = {}))
    c.call(e, r) && m(o, r, e[r]);
  if (t)
    for (var r of t(e))
      h.call(e, r) && m(o, r, e[r]);
  return o;
}, i = (o, e) => f(o, p(e));
import n, { forwardRef as d } from "react";
import l from "../lib/IconBase.mjs";
import w from "../defs/Fish.mjs";
const F = d((o, e) => /* @__PURE__ */ n.createElement(l, i(a({ ref: e }, o), { weights: w })));
F.displayName = "Fish";
export {
  F as Fish
};
