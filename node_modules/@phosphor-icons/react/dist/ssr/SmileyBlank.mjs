var l = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var o = (m, e, r) => e in m ? l(m, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : m[e] = r, t = (m, e) => {
  for (var r in e || (e = {}))
    s.call(e, r) && o(m, r, e[r]);
  if (a)
    for (var r of a(e))
      n.call(e, r) && o(m, r, e[r]);
  return m;
}, i = (m, e) => f(m, p(e));
import S, { forwardRef as c } from "react";
import y from "../lib/SSRBase.mjs";
import B from "../defs/SmileyBlank.mjs";
const R = c((m, e) => /* @__PURE__ */ S.createElement(y, i(t({ ref: e }, m), { weights: B })));
R.displayName = "SmileyBlank";
export {
  R as SmileyBlank
};
