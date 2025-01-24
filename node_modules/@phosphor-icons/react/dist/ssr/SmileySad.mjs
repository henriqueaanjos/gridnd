var S = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var o = (m, e, r) => e in m ? S(m, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : m[e] = r, t = (m, e) => {
  for (var r in e || (e = {}))
    s.call(e, r) && o(m, r, e[r]);
  if (a)
    for (var r of a(e))
      d.call(e, r) && o(m, r, e[r]);
  return m;
}, i = (m, e) => f(m, p(e));
import l, { forwardRef as c } from "react";
import y from "../lib/SSRBase.mjs";
import R from "../defs/SmileySad.mjs";
const n = c((m, e) => /* @__PURE__ */ l.createElement(y, i(t({ ref: e }, m), { weights: R })));
n.displayName = "SmileySad";
export {
  n as SmileySad
};
