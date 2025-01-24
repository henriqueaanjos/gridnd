var p = Object.defineProperty, l = Object.defineProperties;
var c = Object.getOwnPropertyDescriptors;
var i = Object.getOwnPropertySymbols;
var f = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var o = (m, e, r) => e in m ? p(m, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : m[e] = r, t = (m, e) => {
  for (var r in e || (e = {}))
    f.call(e, r) && o(m, r, e[r]);
  if (i)
    for (var r of i(e))
      s.call(e, r) && o(m, r, e[r]);
  return m;
}, a = (m, e) => l(m, c(e));
import n, { forwardRef as S } from "react";
import R from "../lib/SSRBase.mjs";
import d from "../defs/PencilSimple.mjs";
const w = S((m, e) => /* @__PURE__ */ n.createElement(R, a(t({ ref: e }, m), { weights: d })));
w.displayName = "PencilSimple";
export {
  w as PencilSimple
};
