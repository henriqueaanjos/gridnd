var t = Object.defineProperty, f = Object.defineProperties;
var n = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var a = (m, e, o) => e in m ? t(m, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : m[e] = o, i = (m, e) => {
  for (var o in e || (e = {}))
    s.call(e, o) && a(m, o, e[o]);
  if (r)
    for (var o of r(e))
      c.call(e, o) && a(m, o, e[o]);
  return m;
}, p = (m, e) => f(m, n(e));
import l, { forwardRef as d } from "react";
import w from "../lib/IconBase.mjs";
import I from "../defs/MapPinSimple.mjs";
const M = d((m, e) => /* @__PURE__ */ l.createElement(w, p(i({ ref: e }, m), { weights: I })));
M.displayName = "MapPinSimple";
export {
  M as MapPinSimple
};
