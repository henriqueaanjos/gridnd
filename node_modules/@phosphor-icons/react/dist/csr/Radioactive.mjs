var c = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var r = (o, e, a) => e in o ? c(o, e, { enumerable: !0, configurable: !0, writable: !0, value: a }) : o[e] = a, i = (o, e) => {
  for (var a in e || (e = {}))
    s.call(e, a) && r(o, a, e[a]);
  if (t)
    for (var a of t(e))
      d.call(e, a) && r(o, a, e[a]);
  return o;
}, m = (o, e) => f(o, p(e));
import R, { forwardRef as n } from "react";
import l from "../lib/IconBase.mjs";
import v from "../defs/Radioactive.mjs";
const w = n((o, e) => /* @__PURE__ */ R.createElement(l, m(i({ ref: e }, o), { weights: v })));
w.displayName = "Radioactive";
export {
  w as Radioactive
};
