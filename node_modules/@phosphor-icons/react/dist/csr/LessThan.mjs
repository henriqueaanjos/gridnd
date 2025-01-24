var f = Object.defineProperty, i = Object.defineProperties;
var n = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var s = (o, e, r) => e in o ? f(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, t = (o, e) => {
  for (var r in e || (e = {}))
    p.call(e, r) && s(o, r, e[r]);
  if (a)
    for (var r of a(e))
      c.call(e, r) && s(o, r, e[r]);
  return o;
}, m = (o, e) => i(o, n(e));
import h, { forwardRef as d } from "react";
import l from "../lib/IconBase.mjs";
import w from "../defs/LessThan.mjs";
const I = d((o, e) => /* @__PURE__ */ h.createElement(l, m(t({ ref: e }, o), { weights: w })));
I.displayName = "LessThan";
export {
  I as LessThan
};
