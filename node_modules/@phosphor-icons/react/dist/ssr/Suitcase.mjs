var s = Object.defineProperty, c = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, S = Object.prototype.propertyIsEnumerable;
var o = (t, e, r) => e in t ? s(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, m = (t, e) => {
  for (var r in e || (e = {}))
    p.call(e, r) && o(t, r, e[r]);
  if (a)
    for (var r of a(e))
      S.call(e, r) && o(t, r, e[r]);
  return t;
}, i = (t, e) => c(t, f(e));
import R, { forwardRef as d } from "react";
import l from "../lib/SSRBase.mjs";
import n from "../defs/Suitcase.mjs";
const u = d((t, e) => /* @__PURE__ */ R.createElement(l, i(m({ ref: e }, t), { weights: n })));
u.displayName = "Suitcase";
export {
  u as Suitcase
};
