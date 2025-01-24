var i = Object.defineProperty, c = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var e = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, S = Object.prototype.propertyIsEnumerable;
var t = (o, r, s) => r in o ? i(o, r, { enumerable: !0, configurable: !0, writable: !0, value: s }) : o[r] = s, m = (o, r) => {
  for (var s in r || (r = {}))
    p.call(r, s) && t(o, s, r[s]);
  if (e)
    for (var s of e(r))
      S.call(r, s) && t(o, s, r[s]);
  return o;
}, a = (o, r) => c(o, f(r));
import R, { forwardRef as d } from "react";
import l from "../lib/SSRBase.mjs";
import n from "../defs/Scissors.mjs";
const w = d((o, r) => /* @__PURE__ */ R.createElement(l, a(m({ ref: r }, o), { weights: n })));
w.displayName = "Scissors";
export {
  w as Scissors
};
