var f = Object.defineProperty, i = Object.defineProperties;
var n = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var t = (o, e, r) => e in o ? f(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, m = (o, e) => {
  for (var r in e || (e = {}))
    p.call(e, r) && t(o, r, e[r]);
  if (a)
    for (var r of a(e))
      c.call(e, r) && t(o, r, e[r]);
  return o;
}, s = (o, e) => i(o, n(e));
import d, { forwardRef as l } from "react";
import I from "../lib/IconBase.mjs";
import w from "../defs/Island.mjs";
const R = l((o, e) => /* @__PURE__ */ d.createElement(I, s(m({ ref: e }, o), { weights: w })));
R.displayName = "Island";
export {
  R as Island
};
