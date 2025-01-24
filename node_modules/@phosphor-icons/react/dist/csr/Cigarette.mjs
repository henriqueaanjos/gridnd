var f = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, g = Object.prototype.propertyIsEnumerable;
var a = (t, e, r) => e in t ? f(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, m = (t, e) => {
  for (var r in e || (e = {}))
    c.call(e, r) && a(t, r, e[r]);
  if (o)
    for (var r of o(e))
      g.call(e, r) && a(t, r, e[r]);
  return t;
}, i = (t, e) => p(t, s(e));
import n, { forwardRef as d } from "react";
import l from "../lib/IconBase.mjs";
import w from "../defs/Cigarette.mjs";
const C = d((t, e) => /* @__PURE__ */ n.createElement(l, i(m({ ref: e }, t), { weights: w })));
C.displayName = "Cigarette";
export {
  C as Cigarette
};
