var i = Object.defineProperty, p = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, S = Object.prototype.propertyIsEnumerable;
var o = (m, e, r) => e in m ? i(m, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : m[e] = r, t = (m, e) => {
  for (var r in e || (e = {}))
    s.call(e, r) && o(m, r, e[r]);
  if (a)
    for (var r of a(e))
      S.call(e, r) && o(m, r, e[r]);
  return m;
}, l = (m, e) => p(m, f(e));
import c, { forwardRef as R } from "react";
import b from "../lib/SSRBase.mjs";
import d from "../defs/UmbrellaSimple.mjs";
const n = R((m, e) => /* @__PURE__ */ c.createElement(b, l(t({ ref: e }, m), { weights: d })));
n.displayName = "UmbrellaSimple";
export {
  n as UmbrellaSimple
};
