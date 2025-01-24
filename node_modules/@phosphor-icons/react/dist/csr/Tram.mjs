var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var a = (e, r, m) => r in e ? i(e, r, { enumerable: !0, configurable: !0, writable: !0, value: m }) : e[r] = m, t = (e, r) => {
  for (var m in r || (r = {}))
    c.call(r, m) && a(e, m, r[m]);
  if (o)
    for (var m of o(r))
      n.call(r, m) && a(e, m, r[m]);
  return e;
}, f = (e, r) => p(e, s(r));
import d, { forwardRef as l } from "react";
import w from "../lib/IconBase.mjs";
import I from "../defs/Tram.mjs";
const R = l((e, r) => /* @__PURE__ */ d.createElement(w, f(t({ ref: r }, e), { weights: I })));
R.displayName = "Tram";
export {
  R as Tram
};
