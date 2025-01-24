var p = Object.defineProperty, s = Object.defineProperties;
var S = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var f = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var i = (m, e, r) => e in m ? p(m, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : m[e] = r, t = (m, e) => {
  for (var r in e || (e = {}))
    f.call(e, r) && i(m, r, e[r]);
  if (o)
    for (var r of o(e))
      l.call(e, r) && i(m, r, e[r]);
  return m;
}, a = (m, e) => s(m, S(e));
import n, { forwardRef as w } from "react";
import c from "../lib/SSRBase.mjs";
import R from "../defs/PersonSimpleSwim.mjs";
const d = w((m, e) => /* @__PURE__ */ n.createElement(c, a(t({ ref: e }, m), { weights: R })));
d.displayName = "PersonSimpleSwim";
export {
  d as PersonSimpleSwim
};
