var f = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var d = Object.prototype.hasOwnProperty, S = Object.prototype.propertyIsEnumerable;
var o = (e, r, m) => r in e ? f(e, r, { enumerable: !0, configurable: !0, writable: !0, value: m }) : e[r] = m, t = (e, r) => {
  for (var m in r || (r = {}))
    d.call(r, m) && o(e, m, r[m]);
  if (a)
    for (var m of a(r))
      S.call(r, m) && o(e, m, r[m]);
  return e;
}, i = (e, r) => p(e, s(r));
import c, { forwardRef as R } from "react";
import l from "../lib/SSRBase.mjs";
import n from "../defs/SimCard.mjs";
const w = R((e, r) => /* @__PURE__ */ c.createElement(l, i(t({ ref: r }, e), { weights: n })));
w.displayName = "SimCard";
export {
  w as SimCard
};
