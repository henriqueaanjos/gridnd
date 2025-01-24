var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var a = (e, r, m) => r in e ? i(e, r, { enumerable: !0, configurable: !0, writable: !0, value: m }) : e[r] = m, t = (e, r) => {
  for (var m in r || (r = {}))
    c.call(r, m) && a(e, m, r[m]);
  if (o)
    for (var m of o(r))
      l.call(r, m) && a(e, m, r[m]);
  return e;
}, f = (e, r) => p(e, s(r));
import n, { forwardRef as d } from "react";
import w from "../lib/IconBase.mjs";
import A from "../defs/Alarm.mjs";
const I = d((e, r) => /* @__PURE__ */ n.createElement(w, f(t({ ref: r }, e), { weights: A })));
I.displayName = "Alarm";
export {
  I as Alarm
};
