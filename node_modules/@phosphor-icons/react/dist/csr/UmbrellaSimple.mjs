var i = Object.defineProperty, p = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var a = (m, e, r) => e in m ? i(m, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : m[e] = r, t = (m, e) => {
  for (var r in e || (e = {}))
    s.call(e, r) && a(m, r, e[r]);
  if (o)
    for (var r of o(e))
      c.call(e, r) && a(m, r, e[r]);
  return m;
}, l = (m, e) => p(m, f(e));
import n, { forwardRef as b } from "react";
import d from "../lib/IconBase.mjs";
import w from "../defs/UmbrellaSimple.mjs";
const I = b((m, e) => /* @__PURE__ */ n.createElement(d, l(t({ ref: e }, m), { weights: w })));
I.displayName = "UmbrellaSimple";
export {
  I as UmbrellaSimple
};
