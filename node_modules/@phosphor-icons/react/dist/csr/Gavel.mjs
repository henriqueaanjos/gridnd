var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var t = (o, e, r) => e in o ? i(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, m = (o, e) => {
  for (var r in e || (e = {}))
    c.call(e, r) && t(o, r, e[r]);
  if (a)
    for (var r of a(e))
      l.call(e, r) && t(o, r, e[r]);
  return o;
}, f = (o, e) => p(o, s(e));
import n, { forwardRef as d } from "react";
import v from "../lib/IconBase.mjs";
import w from "../defs/Gavel.mjs";
const G = d((o, e) => /* @__PURE__ */ n.createElement(v, f(m({ ref: e }, o), { weights: w })));
G.displayName = "Gavel";
export {
  G as Gavel
};
