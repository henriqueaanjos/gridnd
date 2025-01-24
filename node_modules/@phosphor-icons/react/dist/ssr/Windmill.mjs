var l = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var i = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var o = (m, e, r) => e in m ? l(m, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : m[e] = r, t = (m, e) => {
  for (var r in e || (e = {}))
    s.call(e, r) && o(m, r, e[r]);
  if (i)
    for (var r of i(e))
      d.call(e, r) && o(m, r, e[r]);
  return m;
}, a = (m, e) => f(m, p(e));
import n, { forwardRef as c } from "react";
import R from "../lib/SSRBase.mjs";
import w from "../defs/Windmill.mjs";
const S = c((m, e) => /* @__PURE__ */ n.createElement(R, a(t({ ref: e }, m), { weights: w })));
S.displayName = "Windmill";
export {
  S as Windmill
};
