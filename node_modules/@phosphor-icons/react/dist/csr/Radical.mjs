var c = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var t = (e, a, o) => a in e ? c(e, a, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[a] = o, m = (e, a) => {
  for (var o in a || (a = {}))
    s.call(a, o) && t(e, o, a[o]);
  if (r)
    for (var o of r(a))
      d.call(a, o) && t(e, o, a[o]);
  return e;
}, i = (e, a) => f(e, p(a));
import l, { forwardRef as R } from "react";
import n from "../lib/IconBase.mjs";
import w from "../defs/Radical.mjs";
const I = R((e, a) => /* @__PURE__ */ l.createElement(n, i(m({ ref: a }, e), { weights: w })));
I.displayName = "Radical";
export {
  I as Radical
};
