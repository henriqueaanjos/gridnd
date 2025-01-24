var f = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var m = (o, e, r) => e in o ? f(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, a = (o, e) => {
  for (var r in e || (e = {}))
    c.call(e, r) && m(o, r, e[r]);
  if (t)
    for (var r of t(e))
      d.call(e, r) && m(o, r, e[r]);
  return o;
}, i = (o, e) => p(o, s(e));
import l, { forwardRef as h } from "react";
import n from "../lib/IconBase.mjs";
import w from "../defs/Shield.mjs";
const I = h((o, e) => /* @__PURE__ */ l.createElement(n, i(a({ ref: e }, o), { weights: w })));
I.displayName = "Shield";
export {
  I as Shield
};
