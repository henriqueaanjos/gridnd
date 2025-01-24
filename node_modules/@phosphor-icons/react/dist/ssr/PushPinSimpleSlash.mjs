var t = Object.defineProperty, p = Object.defineProperties;
var l = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var S = Object.prototype.hasOwnProperty, f = Object.prototype.propertyIsEnumerable;
var i = (m, e, r) => e in m ? t(m, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : m[e] = r, o = (m, e) => {
  for (var r in e || (e = {}))
    S.call(e, r) && i(m, r, e[r]);
  if (a)
    for (var r of a(e))
      f.call(e, r) && i(m, r, e[r]);
  return m;
}, s = (m, e) => p(m, l(e));
import h, { forwardRef as n } from "react";
import P from "../lib/SSRBase.mjs";
import c from "../defs/PushPinSimpleSlash.mjs";
const R = n((m, e) => /* @__PURE__ */ h.createElement(P, s(o({ ref: e }, m), { weights: c })));
R.displayName = "PushPinSimpleSlash";
export {
  R as PushPinSimpleSlash
};
