var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, h = Object.prototype.propertyIsEnumerable;
var a = (t, e, o) => e in t ? i(t, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : t[e] = o, m = (t, e) => {
  for (var o in e || (e = {}))
    c.call(e, o) && a(t, o, e[o]);
  if (r)
    for (var o of r(e))
      h.call(e, o) && a(t, o, e[o]);
  return t;
}, f = (t, e) => p(t, s(e));
import n, { forwardRef as d } from "react";
import l from "../lib/IconBase.mjs";
import w from "../defs/ChefHat.mjs";
const C = d((t, e) => /* @__PURE__ */ n.createElement(l, f(m({ ref: e }, t), { weights: w })));
C.displayName = "ChefHat";
export {
  C as ChefHat
};
