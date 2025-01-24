var i = Object.defineProperty, p = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var t = (m, e, o) => e in m ? i(m, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : m[e] = o, l = (m, e) => {
  for (var o in e || (e = {}))
    s.call(e, o) && t(m, o, e[o]);
  if (r)
    for (var o of r(e))
      c.call(e, o) && t(m, o, e[o]);
  return m;
}, a = (m, e) => p(m, f(e));
import n, { forwardRef as B } from "react";
import d from "../lib/IconBase.mjs";
import w from "../defs/BellSimple.mjs";
const I = B((m, e) => /* @__PURE__ */ n.createElement(d, a(l({ ref: e }, m), { weights: w })));
I.displayName = "BellSimple";
export {
  I as BellSimple
};
