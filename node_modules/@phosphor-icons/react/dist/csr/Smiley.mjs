var f = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var t = (m, e, o) => e in m ? f(m, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : m[e] = o, a = (m, e) => {
  for (var o in e || (e = {}))
    c.call(e, o) && t(m, o, e[o]);
  if (r)
    for (var o of r(e))
      l.call(e, o) && t(m, o, e[o]);
  return m;
}, i = (m, e) => p(m, s(e));
import n, { forwardRef as y } from "react";
import d from "../lib/IconBase.mjs";
import w from "../defs/Smiley.mjs";
const I = y((m, e) => /* @__PURE__ */ n.createElement(d, i(a({ ref: e }, m), { weights: w })));
I.displayName = "Smiley";
export {
  I as Smiley
};
