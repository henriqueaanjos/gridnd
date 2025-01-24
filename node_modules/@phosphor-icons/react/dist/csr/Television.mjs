var s = Object.defineProperty, f = Object.defineProperties;
var n = Object.getOwnPropertyDescriptors;
var i = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var t = (o, e, r) => e in o ? s(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, m = (o, e) => {
  for (var r in e || (e = {}))
    p.call(e, r) && t(o, r, e[r]);
  if (i)
    for (var r of i(e))
      c.call(e, r) && t(o, r, e[r]);
  return o;
}, a = (o, e) => f(o, n(e));
import l, { forwardRef as d } from "react";
import v from "../lib/IconBase.mjs";
import w from "../defs/Television.mjs";
const I = d((o, e) => /* @__PURE__ */ l.createElement(v, a(m({ ref: e }, o), { weights: w })));
I.displayName = "Television";
export {
  I as Television
};
