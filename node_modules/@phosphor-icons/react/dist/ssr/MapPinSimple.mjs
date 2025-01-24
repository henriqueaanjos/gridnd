var t = Object.defineProperty, f = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var i = (m, e, r) => e in m ? t(m, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : m[e] = r, o = (m, e) => {
  for (var r in e || (e = {}))
    l.call(e, r) && i(m, r, e[r]);
  if (a)
    for (var r of a(e))
      n.call(e, r) && i(m, r, e[r]);
  return m;
}, p = (m, e) => f(m, s(e));
import S, { forwardRef as c } from "react";
import R from "../lib/SSRBase.mjs";
import d from "../defs/MapPinSimple.mjs";
const w = c((m, e) => /* @__PURE__ */ S.createElement(R, p(o({ ref: e }, m), { weights: d })));
w.displayName = "MapPinSimple";
export {
  w as MapPinSimple
};
