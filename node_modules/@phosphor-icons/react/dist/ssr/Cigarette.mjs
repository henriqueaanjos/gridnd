var f = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, g = Object.prototype.propertyIsEnumerable;
var o = (t, e, r) => e in t ? f(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, m = (t, e) => {
  for (var r in e || (e = {}))
    c.call(e, r) && o(t, r, e[r]);
  if (a)
    for (var r of a(e))
      g.call(e, r) && o(t, r, e[r]);
  return t;
}, i = (t, e) => p(t, s(e));
import R, { forwardRef as d } from "react";
import l from "../lib/SSRBase.mjs";
import n from "../defs/Cigarette.mjs";
const w = d((t, e) => /* @__PURE__ */ R.createElement(l, i(m({ ref: e }, t), { weights: n })));
w.displayName = "Cigarette";
export {
  w as Cigarette
};
