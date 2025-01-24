var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var m = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var t = (o, e, r) => e in o ? i(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, a = (o, e) => {
  for (var r in e || (e = {}))
    c.call(e, r) && t(o, r, e[r]);
  if (m)
    for (var r of m(e))
      n.call(e, r) && t(o, r, e[r]);
  return o;
}, f = (o, e) => p(o, s(e));
import y, { forwardRef as d } from "react";
import l from "../lib/IconBase.mjs";
import w from "../defs/Memory.mjs";
const I = d((o, e) => /* @__PURE__ */ y.createElement(l, f(a({ ref: e }, o), { weights: w })));
I.displayName = "Memory";
export {
  I as Memory
};
