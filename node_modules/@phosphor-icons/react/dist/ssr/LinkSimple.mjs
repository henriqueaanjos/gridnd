var p = Object.defineProperty, f = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var i = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var o = (m, e, r) => e in m ? p(m, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : m[e] = r, t = (m, e) => {
  for (var r in e || (e = {}))
    l.call(e, r) && o(m, r, e[r]);
  if (i)
    for (var r of i(e))
      n.call(e, r) && o(m, r, e[r]);
  return m;
}, a = (m, e) => f(m, s(e));
import S, { forwardRef as c } from "react";
import R from "../lib/SSRBase.mjs";
import d from "../defs/LinkSimple.mjs";
const k = c((m, e) => /* @__PURE__ */ S.createElement(R, a(t({ ref: e }, m), { weights: d })));
k.displayName = "LinkSimple";
export {
  k as LinkSimple
};
