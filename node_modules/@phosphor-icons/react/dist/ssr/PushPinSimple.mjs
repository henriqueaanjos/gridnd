var p = Object.defineProperty, s = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var i = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var o = (m, e, r) => e in m ? p(m, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : m[e] = r, t = (m, e) => {
  for (var r in e || (e = {}))
    l.call(e, r) && o(m, r, e[r]);
  if (i)
    for (var r of i(e))
      n.call(e, r) && o(m, r, e[r]);
  return m;
}, a = (m, e) => s(m, f(e));
import P, { forwardRef as S } from "react";
import c from "../lib/SSRBase.mjs";
import h from "../defs/PushPinSimple.mjs";
const R = S((m, e) => /* @__PURE__ */ P.createElement(c, a(t({ ref: e }, m), { weights: h })));
R.displayName = "PushPinSimple";
export {
  R as PushPinSimple
};
