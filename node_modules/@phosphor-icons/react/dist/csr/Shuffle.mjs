var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var f = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var t = (o, e, r) => e in o ? i(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, m = (o, e) => {
  for (var r in e || (e = {}))
    c.call(e, r) && t(o, r, e[r]);
  if (f)
    for (var r of f(e))
      l.call(e, r) && t(o, r, e[r]);
  return o;
}, a = (o, e) => p(o, s(e));
import h, { forwardRef as n } from "react";
import d from "../lib/IconBase.mjs";
import u from "../defs/Shuffle.mjs";
const w = n((o, e) => /* @__PURE__ */ h.createElement(d, a(m({ ref: e }, o), { weights: u })));
w.displayName = "Shuffle";
export {
  w as Shuffle
};
