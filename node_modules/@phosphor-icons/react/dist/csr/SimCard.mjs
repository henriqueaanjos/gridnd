var f = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var a = (e, r, m) => r in e ? f(e, r, { enumerable: !0, configurable: !0, writable: !0, value: m }) : e[r] = m, t = (e, r) => {
  for (var m in r || (r = {}))
    c.call(r, m) && a(e, m, r[m]);
  if (o)
    for (var m of o(r))
      d.call(r, m) && a(e, m, r[m]);
  return e;
}, i = (e, r) => p(e, s(r));
import n, { forwardRef as l } from "react";
import w from "../lib/IconBase.mjs";
import C from "../defs/SimCard.mjs";
const I = l((e, r) => /* @__PURE__ */ n.createElement(w, i(t({ ref: r }, e), { weights: C })));
I.displayName = "SimCard";
export {
  I as SimCard
};
