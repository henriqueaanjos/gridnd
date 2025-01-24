var f = Object.defineProperty, i = Object.defineProperties;
var n = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var t = (e, o, r) => o in e ? f(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, m = (e, o) => {
  for (var r in o || (o = {}))
    p.call(o, r) && t(e, r, o[r]);
  if (a)
    for (var r of a(o))
      s.call(o, r) && t(e, r, o[r]);
  return e;
}, l = (e, o) => i(e, n(o));
import c, { forwardRef as B } from "react";
import d from "../lib/IconBase.mjs";
import w from "../defs/Balloon.mjs";
const I = B((e, o) => /* @__PURE__ */ c.createElement(d, l(m({ ref: o }, e), { weights: w })));
I.displayName = "Balloon";
export {
  I as Balloon
};
