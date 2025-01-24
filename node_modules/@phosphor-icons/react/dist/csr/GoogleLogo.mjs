var g = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var m = (e, o, r) => o in e ? g(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, a = (e, o) => {
  for (var r in o || (o = {}))
    s.call(o, r) && m(e, r, o[r]);
  if (t)
    for (var r of t(o))
      c.call(o, r) && m(e, r, o[r]);
  return e;
}, f = (e, o) => i(e, p(o));
import l, { forwardRef as n } from "react";
import d from "../lib/IconBase.mjs";
import w from "../defs/GoogleLogo.mjs";
const G = n((e, o) => /* @__PURE__ */ l.createElement(d, f(a({ ref: o }, e), { weights: w })));
G.displayName = "GoogleLogo";
export {
  G as GoogleLogo
};
