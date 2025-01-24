var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var t = (e, a, o) => a in e ? f(e, a, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[a] = o, m = (e, a) => {
  for (var o in a || (a = {}))
    c.call(a, o) && t(e, o, a[o]);
  if (r)
    for (var o of r(a))
      d.call(a, o) && t(e, o, a[o]);
  return e;
}, s = (e, a) => i(e, p(a));
import n, { forwardRef as k } from "react";
import l from "../lib/IconBase.mjs";
import w from "../defs/MaskSad.mjs";
const I = k((e, a) => /* @__PURE__ */ n.createElement(l, s(m({ ref: a }, e), { weights: w })));
I.displayName = "MaskSad";
export {
  I as MaskSad
};
