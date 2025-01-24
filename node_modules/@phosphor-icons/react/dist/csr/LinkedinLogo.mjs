var n = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var i = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var t = (e, o, r) => o in e ? n(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, m = (e, o) => {
  for (var r in o || (o = {}))
    s.call(o, r) && t(e, r, o[r]);
  if (i)
    for (var r of i(o))
      c.call(o, r) && t(e, r, o[r]);
  return e;
}, a = (e, o) => f(e, p(o));
import d, { forwardRef as L } from "react";
import g from "../lib/IconBase.mjs";
import k from "../defs/LinkedinLogo.mjs";
const l = L((e, o) => /* @__PURE__ */ d.createElement(g, a(m({ ref: o }, e), { weights: k })));
l.displayName = "LinkedinLogo";
export {
  l as LinkedinLogo
};
