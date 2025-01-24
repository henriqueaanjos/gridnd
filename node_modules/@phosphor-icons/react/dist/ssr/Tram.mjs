var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, R = Object.prototype.propertyIsEnumerable;
var o = (e, r, m) => r in e ? i(e, r, { enumerable: !0, configurable: !0, writable: !0, value: m }) : e[r] = m, t = (e, r) => {
  for (var m in r || (r = {}))
    c.call(r, m) && o(e, m, r[m]);
  if (a)
    for (var m of a(r))
      R.call(r, m) && o(e, m, r[m]);
  return e;
}, f = (e, r) => p(e, s(r));
import d, { forwardRef as l } from "react";
import n from "../lib/SSRBase.mjs";
import w from "../defs/Tram.mjs";
const S = l((e, r) => /* @__PURE__ */ d.createElement(n, f(t({ ref: r }, e), { weights: w })));
S.displayName = "Tram";
export {
  S as Tram
};
