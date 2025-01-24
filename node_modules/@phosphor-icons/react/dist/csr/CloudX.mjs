var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var m = (e, o, r) => o in e ? i(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, a = (e, o) => {
  for (var r in o || (o = {}))
    c.call(o, r) && m(e, r, o[r]);
  if (t)
    for (var r of t(o))
      d.call(o, r) && m(e, r, o[r]);
  return e;
}, f = (e, o) => p(e, s(o));
import l, { forwardRef as n } from "react";
import u from "../lib/IconBase.mjs";
import w from "../defs/CloudX.mjs";
const C = n((e, o) => /* @__PURE__ */ l.createElement(u, f(a({ ref: o }, e), { weights: w })));
C.displayName = "CloudX";
export {
  C as CloudX
};
