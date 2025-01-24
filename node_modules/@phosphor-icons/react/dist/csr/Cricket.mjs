var c = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var m = (r, e, t) => e in r ? c(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t, a = (r, e) => {
  for (var t in e || (e = {}))
    s.call(e, t) && m(r, t, e[t]);
  if (o)
    for (var t of o(e))
      n.call(e, t) && m(r, t, e[t]);
  return r;
}, i = (r, e) => f(r, p(e));
import d, { forwardRef as k } from "react";
import l from "../lib/IconBase.mjs";
import w from "../defs/Cricket.mjs";
const C = k((r, e) => /* @__PURE__ */ d.createElement(l, i(a({ ref: e }, r), { weights: w })));
C.displayName = "Cricket";
export {
  C as Cricket
};
