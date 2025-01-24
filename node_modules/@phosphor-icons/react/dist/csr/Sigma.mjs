var f = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, g = Object.prototype.propertyIsEnumerable;
var a = (m, e, o) => e in m ? f(m, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : m[e] = o, t = (m, e) => {
  for (var o in e || (e = {}))
    c.call(e, o) && a(m, o, e[o]);
  if (r)
    for (var o of r(e))
      g.call(e, o) && a(m, o, e[o]);
  return m;
}, i = (m, e) => p(m, s(e));
import n, { forwardRef as d } from "react";
import l from "../lib/IconBase.mjs";
import w from "../defs/Sigma.mjs";
const I = d((m, e) => /* @__PURE__ */ n.createElement(l, i(t({ ref: e }, m), { weights: w })));
I.displayName = "Sigma";
export {
  I as Sigma
};
