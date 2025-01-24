var n = Object.defineProperty, c = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var m = (o, e, r) => e in o ? n(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, a = (o, e) => {
  for (var r in e || (e = {}))
    p.call(e, r) && m(o, r, e[r]);
  if (t)
    for (var r of t(e))
      s.call(e, r) && m(o, r, e[r]);
  return o;
}, i = (o, e) => c(o, f(e));
import d, { forwardRef as l } from "react";
import g from "../lib/IconBase.mjs";
import u from "../defs/SelectionForeground.mjs";
const w = l((o, e) => /* @__PURE__ */ d.createElement(g, i(a({ ref: e }, o), { weights: u })));
w.displayName = "SelectionForeground";
export {
  w as SelectionForeground
};
