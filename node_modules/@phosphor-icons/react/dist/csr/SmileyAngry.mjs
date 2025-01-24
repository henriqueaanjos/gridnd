var f = Object.defineProperty, n = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, y = Object.prototype.propertyIsEnumerable;
var t = (r, e, m) => e in r ? f(r, e, { enumerable: !0, configurable: !0, writable: !0, value: m }) : r[e] = m, a = (r, e) => {
  for (var m in e || (e = {}))
    s.call(e, m) && t(r, m, e[m]);
  if (o)
    for (var m of o(e))
      y.call(e, m) && t(r, m, e[m]);
  return r;
}, i = (r, e) => n(r, p(e));
import c, { forwardRef as l } from "react";
import g from "../lib/IconBase.mjs";
import d from "../defs/SmileyAngry.mjs";
const w = l((r, e) => /* @__PURE__ */ c.createElement(g, i(a({ ref: e }, r), { weights: d })));
w.displayName = "SmileyAngry";
export {
  w as SmileyAngry
};
