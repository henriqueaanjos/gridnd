var i = Object.defineProperty, n = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var m = (o, e, r) => e in o ? i(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, a = (o, e) => {
  for (var r in e || (e = {}))
    s.call(e, r) && m(o, r, e[r]);
  if (t)
    for (var r of t(e))
      c.call(e, r) && m(o, r, e[r]);
  return o;
}, f = (o, e) => n(o, p(e));
import d, { forwardRef as l } from "react";
import v from "../lib/IconBase.mjs";
import w from "../defs/Oven.mjs";
const I = l((o, e) => /* @__PURE__ */ d.createElement(v, f(a({ ref: e }, o), { weights: w })));
I.displayName = "Oven";
export {
  I as Oven
};
