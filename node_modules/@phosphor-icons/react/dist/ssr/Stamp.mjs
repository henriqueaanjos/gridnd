var f = Object.defineProperty, i = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var S = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var a = (e, t, m) => t in e ? f(e, t, { enumerable: !0, configurable: !0, writable: !0, value: m }) : e[t] = m, o = (e, t) => {
  for (var m in t || (t = {}))
    S.call(t, m) && a(e, m, t[m]);
  if (r)
    for (var m of r(t))
      c.call(t, m) && a(e, m, t[m]);
  return e;
}, p = (e, t) => i(e, s(t));
import R, { forwardRef as d } from "react";
import l from "../lib/SSRBase.mjs";
import n from "../defs/Stamp.mjs";
const w = d((e, t) => /* @__PURE__ */ R.createElement(l, p(o({ ref: t }, e), { weights: n })));
w.displayName = "Stamp";
export {
  w as Stamp
};
