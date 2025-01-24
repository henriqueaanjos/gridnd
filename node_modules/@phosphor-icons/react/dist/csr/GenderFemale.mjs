var i = Object.defineProperty, n = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var a = (r, e, m) => e in r ? i(r, e, { enumerable: !0, configurable: !0, writable: !0, value: m }) : r[e] = m, t = (r, e) => {
  for (var m in e || (e = {}))
    s.call(e, m) && a(r, m, e[m]);
  if (o)
    for (var m of o(e))
      c.call(e, m) && a(r, m, e[m]);
  return r;
}, f = (r, e) => n(r, p(e));
import d, { forwardRef as l } from "react";
import w from "../lib/IconBase.mjs";
import F from "../defs/GenderFemale.mjs";
const G = l((r, e) => /* @__PURE__ */ d.createElement(w, f(t({ ref: e }, r), { weights: F })));
G.displayName = "GenderFemale";
export {
  G as GenderFemale
};
