var l = Object.defineProperty, f = Object.defineProperties;
var n = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var r = (t, e, m) => e in t ? l(t, e, { enumerable: !0, configurable: !0, writable: !0, value: m }) : t[e] = m, i = (t, e) => {
  for (var m in e || (e = {}))
    p.call(e, m) && r(t, m, e[m]);
  if (o)
    for (var m of o(e))
      s.call(e, m) && r(t, m, e[m]);
  return t;
}, a = (t, e) => f(t, n(e));
import c, { forwardRef as g } from "react";
import y from "../lib/IconBase.mjs";
import d from "../defs/SmileyMelting.mjs";
const w = g((t, e) => /* @__PURE__ */ c.createElement(y, a(i({ ref: e }, t), { weights: d })));
w.displayName = "SmileyMelting";
export {
  w as SmileyMelting
};
