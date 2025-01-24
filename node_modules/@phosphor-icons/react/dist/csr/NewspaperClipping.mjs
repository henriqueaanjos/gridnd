var m = Object.defineProperty, s = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var n = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var a = (p, e, r) => e in p ? m(p, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : p[e] = r, i = (p, e) => {
  for (var r in e || (e = {}))
    n.call(e, r) && a(p, r, e[r]);
  if (o)
    for (var r of o(e))
      c.call(e, r) && a(p, r, e[r]);
  return p;
}, t = (p, e) => s(p, f(e));
import l, { forwardRef as w } from "react";
import g from "../lib/IconBase.mjs";
import N from "../defs/NewspaperClipping.mjs";
const d = w((p, e) => /* @__PURE__ */ l.createElement(g, t(i({ ref: e }, p), { weights: N })));
d.displayName = "NewspaperClipping";
export {
  d as NewspaperClipping
};
