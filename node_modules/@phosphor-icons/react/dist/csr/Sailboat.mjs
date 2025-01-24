var f = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var e = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var r = (a, o, t) => o in a ? f(a, o, { enumerable: !0, configurable: !0, writable: !0, value: t }) : a[o] = t, m = (a, o) => {
  for (var t in o || (o = {}))
    c.call(o, t) && r(a, t, o[t]);
  if (e)
    for (var t of e(o))
      l.call(o, t) && r(a, t, o[t]);
  return a;
}, i = (a, o) => p(a, s(o));
import n, { forwardRef as b } from "react";
import d from "../lib/IconBase.mjs";
import w from "../defs/Sailboat.mjs";
const I = b((a, o) => /* @__PURE__ */ n.createElement(d, i(m({ ref: o }, a), { weights: w })));
I.displayName = "Sailboat";
export {
  I as Sailboat
};
