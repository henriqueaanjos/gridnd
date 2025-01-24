var c = Object.defineProperty, f = Object.defineProperties;
var n = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var a = (m, e, o) => e in m ? c(m, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : m[e] = o, t = (m, e) => {
  for (var o in e || (e = {}))
    p.call(e, o) && a(m, o, e[o]);
  if (r)
    for (var o of r(e))
      s.call(e, o) && a(m, o, e[o]);
  return m;
}, i = (m, e) => f(m, n(e));
import l, { forwardRef as S } from "react";
import y from "../lib/IconBase.mjs";
import d from "../defs/ScanSmiley.mjs";
const w = S((m, e) => /* @__PURE__ */ l.createElement(y, i(t({ ref: e }, m), { weights: d })));
w.displayName = "ScanSmiley";
export {
  w as ScanSmiley
};
