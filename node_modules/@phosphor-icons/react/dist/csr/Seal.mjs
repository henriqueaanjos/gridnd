var s = Object.defineProperty, c = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var t = (a, e, r) => e in a ? s(a, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : a[e] = r, m = (a, e) => {
  for (var r in e || (e = {}))
    l.call(e, r) && t(a, r, e[r]);
  if (o)
    for (var r of o(e))
      p.call(e, r) && t(a, r, e[r]);
  return a;
}, i = (a, e) => c(a, f(e));
import n, { forwardRef as d } from "react";
import w from "../lib/IconBase.mjs";
import y from "../defs/Seal.mjs";
const I = d((a, e) => /* @__PURE__ */ n.createElement(w, i(m({ ref: e }, a), { weights: y })));
I.displayName = "Seal";
export {
  I as CircleWavy,
  I as Seal
};
