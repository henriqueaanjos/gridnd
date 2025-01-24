var f = Object.defineProperty, i = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var p = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var t = (e, o, r) => o in e ? f(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, m = (e, o) => {
  for (var r in o || (o = {}))
    c.call(o, r) && t(e, r, o[r]);
  if (p)
    for (var r of p(o))
      l.call(o, r) && t(e, r, o[r]);
  return e;
}, a = (e, o) => i(e, s(o));
import g, { forwardRef as n } from "react";
import d from "../lib/IconBase.mjs";
import w from "../defs/AppleLogo.mjs";
const A = n((e, o) => /* @__PURE__ */ g.createElement(d, a(m({ ref: o }, e), { weights: w })));
A.displayName = "AppleLogo";
export {
  A as AppleLogo
};
