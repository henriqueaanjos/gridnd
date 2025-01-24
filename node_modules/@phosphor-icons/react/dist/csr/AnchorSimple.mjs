var p = Object.defineProperty, c = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var m = Object.getOwnPropertySymbols;
var n = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var t = (o, e, r) => e in o ? p(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, a = (o, e) => {
  for (var r in e || (e = {}))
    n.call(e, r) && t(o, r, e[r]);
  if (m)
    for (var r of m(e))
      s.call(e, r) && t(o, r, e[r]);
  return o;
}, i = (o, e) => c(o, f(e));
import l, { forwardRef as h } from "react";
import d from "../lib/IconBase.mjs";
import w from "../defs/AnchorSimple.mjs";
const A = h((o, e) => /* @__PURE__ */ l.createElement(d, i(a({ ref: e }, o), { weights: w })));
A.displayName = "AnchorSimple";
export {
  A as AnchorSimple
};
