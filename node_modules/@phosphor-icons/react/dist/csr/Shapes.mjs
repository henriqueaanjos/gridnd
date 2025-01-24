var s = Object.defineProperty, f = Object.defineProperties;
var i = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, h = Object.prototype.propertyIsEnumerable;
var t = (o, e, r) => e in o ? s(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, m = (o, e) => {
  for (var r in e || (e = {}))
    c.call(e, r) && t(o, r, e[r]);
  if (a)
    for (var r of a(e))
      h.call(e, r) && t(o, r, e[r]);
  return o;
}, p = (o, e) => f(o, i(e));
import n, { forwardRef as d } from "react";
import l from "../lib/IconBase.mjs";
import w from "../defs/Shapes.mjs";
const I = d((o, e) => /* @__PURE__ */ n.createElement(l, p(m({ ref: e }, o), { weights: w })));
I.displayName = "Shapes";
export {
  I as Shapes
};
