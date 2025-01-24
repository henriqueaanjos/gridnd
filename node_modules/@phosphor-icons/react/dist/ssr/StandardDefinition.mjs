var n = Object.defineProperty, f = Object.defineProperties;
var d = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var i = (e, t, r) => t in e ? n(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, o = (e, t) => {
  for (var r in t || (t = {}))
    p.call(t, r) && i(e, r, t[r]);
  if (a)
    for (var r of a(t))
      s.call(t, r) && i(e, r, t[r]);
  return e;
}, m = (e, t) => f(e, d(t));
import S, { forwardRef as c } from "react";
import R from "../lib/SSRBase.mjs";
import l from "../defs/StandardDefinition.mjs";
const w = c((e, t) => /* @__PURE__ */ S.createElement(R, m(o({ ref: t }, e), { weights: l })));
w.displayName = "StandardDefinition";
export {
  w as StandardDefinition
};
