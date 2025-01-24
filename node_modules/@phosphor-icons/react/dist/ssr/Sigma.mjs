var f = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var S = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var o = (m, e, r) => e in m ? f(m, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : m[e] = r, t = (m, e) => {
  for (var r in e || (e = {}))
    S.call(e, r) && o(m, r, e[r]);
  if (a)
    for (var r of a(e))
      c.call(e, r) && o(m, r, e[r]);
  return m;
}, i = (m, e) => p(m, s(e));
import g, { forwardRef as R } from "react";
import d from "../lib/SSRBase.mjs";
import l from "../defs/Sigma.mjs";
const n = R((m, e) => /* @__PURE__ */ g.createElement(d, i(t({ ref: e }, m), { weights: l })));
n.displayName = "Sigma";
export {
  n as Sigma
};
