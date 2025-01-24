var s = Object.defineProperty, c = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var i = Object.getOwnPropertySymbols;
var n = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var t = (r, e, o) => e in r ? s(r, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[e] = o, m = (r, e) => {
  for (var o in e || (e = {}))
    n.call(e, o) && t(r, o, e[o]);
  if (i)
    for (var o of i(e))
      p.call(e, o) && t(r, o, e[o]);
  return r;
}, a = (r, e) => c(r, f(e));
import l, { forwardRef as d } from "react";
import u from "../lib/IconBase.mjs";
import w from "../defs/MinusCircle.mjs";
const C = d((r, e) => /* @__PURE__ */ l.createElement(u, a(m({ ref: e }, r), { weights: w })));
C.displayName = "MinusCircle";
export {
  C as MinusCircle
};
