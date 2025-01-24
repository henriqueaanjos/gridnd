var i = Object.defineProperty, n = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var a = (o, e, r) => e in o ? i(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, c = (o, e) => {
  for (var r in e || (e = {}))
    p.call(e, r) && a(o, r, e[r]);
  if (t)
    for (var r of t(e))
      s.call(e, r) && a(o, r, e[r]);
  return o;
}, m = (o, e) => n(o, f(e));
import d, { forwardRef as l } from "react";
import g from "../lib/IconBase.mjs";
import B from "../defs/SelectionBackground.mjs";
const k = l((o, e) => /* @__PURE__ */ d.createElement(g, m(c({ ref: e }, o), { weights: B })));
k.displayName = "SelectionBackground";
export {
  k as SelectionBackground
};
