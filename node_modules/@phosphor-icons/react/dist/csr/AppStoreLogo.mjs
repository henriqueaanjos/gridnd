var f = Object.defineProperty, i = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, g = Object.prototype.propertyIsEnumerable;
var p = (e, o, r) => o in e ? f(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, m = (e, o) => {
  for (var r in o || (o = {}))
    c.call(o, r) && p(e, r, o[r]);
  if (t)
    for (var r of t(o))
      g.call(o, r) && p(e, r, o[r]);
  return e;
}, a = (e, o) => i(e, s(o));
import n, { forwardRef as d } from "react";
import l from "../lib/IconBase.mjs";
import w from "../defs/AppStoreLogo.mjs";
const A = d((e, o) => /* @__PURE__ */ n.createElement(l, a(m({ ref: o }, e), { weights: w })));
A.displayName = "AppStoreLogo";
export {
  A as AppStoreLogo
};
