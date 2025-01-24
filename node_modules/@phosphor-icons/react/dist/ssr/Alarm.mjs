var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var o = (e, r, m) => r in e ? i(e, r, { enumerable: !0, configurable: !0, writable: !0, value: m }) : e[r] = m, t = (e, r) => {
  for (var m in r || (r = {}))
    l.call(r, m) && o(e, m, r[m]);
  if (a)
    for (var m of a(r))
      c.call(r, m) && o(e, m, r[m]);
  return e;
}, f = (e, r) => p(e, s(r));
import R, { forwardRef as d } from "react";
import n from "../lib/SSRBase.mjs";
import w from "../defs/Alarm.mjs";
const A = d((e, r) => /* @__PURE__ */ R.createElement(n, f(t({ ref: r }, e), { weights: w })));
A.displayName = "Alarm";
export {
  A as Alarm
};
