var s = Object.defineProperty, d = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var n = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var t = (e, a, o) => a in e ? s(e, a, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[a] = o, m = (e, a) => {
  for (var o in a || (a = {}))
    n.call(a, o) && t(e, o, a[o]);
  if (r)
    for (var o of r(a))
      p.call(a, o) && t(e, o, a[o]);
  return e;
}, i = (e, a) => d(e, f(a));
import c, { forwardRef as B } from "react";
import l from "../lib/IconBase.mjs";
import w from "../defs/Bandaids.mjs";
const I = B((e, a) => /* @__PURE__ */ c.createElement(l, i(m({ ref: a }, e), { weights: w })));
I.displayName = "Bandaids";
export {
  I as Bandaids
};
