var c = Object.defineProperty, f = Object.defineProperties;
var n = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var t = (e, a, o) => a in e ? c(e, a, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[a] = o, m = (e, a) => {
  for (var o in a || (a = {}))
    p.call(a, o) && t(e, o, a[o]);
  if (r)
    for (var o of r(a))
      s.call(a, o) && t(e, o, a[o]);
  return e;
}, i = (e, a) => f(e, n(a));
import d, { forwardRef as g } from "react";
import l from "../lib/IconBase.mjs";
import w from "../defs/MagicWand.mjs";
const I = g((e, a) => /* @__PURE__ */ d.createElement(l, i(m({ ref: a }, e), { weights: w })));
I.displayName = "MagicWand";
export {
  I as MagicWand
};
