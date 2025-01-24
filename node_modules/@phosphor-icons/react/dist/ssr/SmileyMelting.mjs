var l = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var i = (t, e, m) => e in t ? l(t, e, { enumerable: !0, configurable: !0, writable: !0, value: m }) : t[e] = m, o = (t, e) => {
  for (var m in e || (e = {}))
    s.call(e, m) && i(t, m, e[m]);
  if (r)
    for (var m of r(e))
      n.call(e, m) && i(t, m, e[m]);
  return t;
}, a = (t, e) => f(t, p(e));
import S, { forwardRef as c } from "react";
import g from "../lib/SSRBase.mjs";
import y from "../defs/SmileyMelting.mjs";
const R = c((t, e) => /* @__PURE__ */ S.createElement(g, a(o({ ref: e }, t), { weights: y })));
R.displayName = "SmileyMelting";
export {
  R as SmileyMelting
};
