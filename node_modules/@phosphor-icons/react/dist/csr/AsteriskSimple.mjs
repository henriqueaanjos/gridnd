var a = Object.defineProperty, p = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var m = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var o = (r, e, t) => e in r ? a(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t, i = (r, e) => {
  for (var t in e || (e = {}))
    c.call(e, t) && o(r, t, e[t]);
  if (m)
    for (var t of m(e))
      l.call(e, t) && o(r, t, e[t]);
  return r;
}, s = (r, e) => p(r, f(e));
import n, { forwardRef as d } from "react";
import k from "../lib/IconBase.mjs";
import w from "../defs/AsteriskSimple.mjs";
const A = d((r, e) => /* @__PURE__ */ n.createElement(k, s(i({ ref: e }, r), { weights: w })));
A.displayName = "AsteriskSimple";
export {
  A as AsteriskSimple
};
