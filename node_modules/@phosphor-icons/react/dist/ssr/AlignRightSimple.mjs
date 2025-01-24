var p = Object.defineProperty, l = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var m = Object.getOwnPropertySymbols;
var g = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var r = (i, e, t) => e in i ? p(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[e] = t, o = (i, e) => {
  for (var t in e || (e = {}))
    g.call(e, t) && r(i, t, e[t]);
  if (m)
    for (var t of m(e))
      s.call(e, t) && r(i, t, e[t]);
  return i;
}, a = (i, e) => l(i, f(e));
import R, { forwardRef as n } from "react";
import S from "../lib/SSRBase.mjs";
import c from "../defs/AlignRightSimple.mjs";
const h = n((i, e) => /* @__PURE__ */ R.createElement(S, a(o({ ref: e }, i), { weights: c })));
h.displayName = "AlignRightSimple";
export {
  h as AlignRightSimple
};
