var p = Object.defineProperty, f = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, S = Object.prototype.propertyIsEnumerable;
var o = (r, e, m) => e in r ? p(r, e, { enumerable: !0, configurable: !0, writable: !0, value: m }) : r[e] = m, t = (r, e) => {
  for (var m in e || (e = {}))
    l.call(e, m) && o(r, m, e[m]);
  if (a)
    for (var m of a(e))
      S.call(e, m) && o(r, m, e[m]);
  return r;
}, i = (r, e) => f(r, s(e));
import c, { forwardRef as R } from "react";
import d from "../lib/SSRBase.mjs";
import n from "../defs/CarSimple.mjs";
const w = R((r, e) => /* @__PURE__ */ c.createElement(d, i(t({ ref: e }, r), { weights: n })));
w.displayName = "CarSimple";
export {
  w as CarSimple
};
