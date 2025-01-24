var p = Object.defineProperty, f = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var a = (r, e, m) => e in r ? p(r, e, { enumerable: !0, configurable: !0, writable: !0, value: m }) : r[e] = m, t = (r, e) => {
  for (var m in e || (e = {}))
    c.call(e, m) && a(r, m, e[m]);
  if (o)
    for (var m of o(e))
      l.call(e, m) && a(r, m, e[m]);
  return r;
}, i = (r, e) => f(r, s(e));
import n, { forwardRef as d } from "react";
import w from "../lib/IconBase.mjs";
import C from "../defs/CarSimple.mjs";
const I = d((r, e) => /* @__PURE__ */ n.createElement(w, i(t({ ref: e }, r), { weights: C })));
I.displayName = "CarSimple";
export {
  I as CarSimple
};
