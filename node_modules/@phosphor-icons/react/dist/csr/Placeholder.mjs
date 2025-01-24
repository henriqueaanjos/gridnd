var l = Object.defineProperty, f = Object.defineProperties;
var i = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var t = (o, e, r) => e in o ? l(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, m = (o, e) => {
  for (var r in e || (e = {}))
    p.call(e, r) && t(o, r, e[r]);
  if (a)
    for (var r of a(e))
      s.call(e, r) && t(o, r, e[r]);
  return o;
}, c = (o, e) => f(o, i(e));
import d, { forwardRef as h } from "react";
import n from "../lib/IconBase.mjs";
import w from "../defs/Placeholder.mjs";
const I = h((o, e) => /* @__PURE__ */ d.createElement(n, c(m({ ref: e }, o), { weights: w })));
I.displayName = "Placeholder";
export {
  I as Placeholder
};
