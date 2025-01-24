var p = Object.defineProperty, s = Object.defineProperties;
var S = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, f = Object.prototype.propertyIsEnumerable;
var a = (t, e, m) => e in t ? p(t, e, { enumerable: !0, configurable: !0, writable: !0, value: m }) : t[e] = m, i = (t, e) => {
  for (var m in e || (e = {}))
    c.call(e, m) && a(t, m, e[m]);
  if (r)
    for (var m of r(e))
      f.call(e, m) && a(t, m, e[m]);
  return t;
}, o = (t, e) => s(t, S(e));
import l, { forwardRef as R } from "react";
import d from "../lib/SSRBase.mjs";
import n from "../defs/SuitcaseSimple.mjs";
const u = R((t, e) => /* @__PURE__ */ l.createElement(d, o(i({ ref: e }, t), { weights: n })));
u.displayName = "SuitcaseSimple";
export {
  u as SuitcaseSimple
};
