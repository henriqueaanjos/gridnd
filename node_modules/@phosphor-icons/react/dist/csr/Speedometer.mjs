var f = Object.defineProperty, i = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var m = (o, e, r) => e in o ? f(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, a = (o, e) => {
  for (var r in e || (e = {}))
    c.call(e, r) && m(o, r, e[r]);
  if (t)
    for (var r of t(e))
      d.call(e, r) && m(o, r, e[r]);
  return o;
}, p = (o, e) => i(o, s(e));
import n, { forwardRef as l } from "react";
import w from "../lib/IconBase.mjs";
import I from "../defs/Speedometer.mjs";
const R = l((o, e) => /* @__PURE__ */ n.createElement(w, p(a({ ref: e }, o), { weights: I })));
R.displayName = "Speedometer";
export {
  R as Speedometer
};
