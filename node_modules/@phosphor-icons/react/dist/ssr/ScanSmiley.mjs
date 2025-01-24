var S = Object.defineProperty, c = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var o = (m, e, r) => e in m ? S(m, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : m[e] = r, t = (m, e) => {
  for (var r in e || (e = {}))
    p.call(e, r) && o(m, r, e[r]);
  if (a)
    for (var r of a(e))
      s.call(e, r) && o(m, r, e[r]);
  return m;
}, i = (m, e) => c(m, f(e));
import l, { forwardRef as n } from "react";
import y from "../lib/SSRBase.mjs";
import R from "../defs/ScanSmiley.mjs";
const d = n((m, e) => /* @__PURE__ */ l.createElement(y, i(t({ ref: e }, m), { weights: R })));
d.displayName = "ScanSmiley";
export {
  d as ScanSmiley
};
