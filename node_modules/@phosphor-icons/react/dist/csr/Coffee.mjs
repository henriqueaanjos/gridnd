var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var f = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var t = (o, e, r) => e in o ? i(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, m = (o, e) => {
  for (var r in e || (e = {}))
    c.call(e, r) && t(o, r, e[r]);
  if (f)
    for (var r of f(e))
      n.call(e, r) && t(o, r, e[r]);
  return o;
}, a = (o, e) => p(o, s(e));
import d, { forwardRef as l } from "react";
import w from "../lib/IconBase.mjs";
import C from "../defs/Coffee.mjs";
const I = l((o, e) => /* @__PURE__ */ d.createElement(w, a(m({ ref: e }, o), { weights: C })));
I.displayName = "Coffee";
export {
  I as Coffee
};
