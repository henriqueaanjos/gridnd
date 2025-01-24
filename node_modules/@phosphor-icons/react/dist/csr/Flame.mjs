var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var a = (m, e, o) => e in m ? i(m, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : m[e] = o, t = (m, e) => {
  for (var o in e || (e = {}))
    c.call(e, o) && a(m, o, e[o]);
  if (r)
    for (var o of r(e))
      l.call(e, o) && a(m, o, e[o]);
  return m;
}, f = (m, e) => p(m, s(e));
import n, { forwardRef as d } from "react";
import w from "../lib/IconBase.mjs";
import F from "../defs/Flame.mjs";
const I = d((m, e) => /* @__PURE__ */ n.createElement(w, f(t({ ref: e }, m), { weights: F })));
I.displayName = "Flame";
export {
  I as Flame
};
