var s = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var n = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var m = (o, e, r) => e in o ? s(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, a = (o, e) => {
  for (var r in e || (e = {}))
    n.call(e, r) && m(o, r, e[r]);
  if (t)
    for (var r of t(e))
      c.call(e, r) && m(o, r, e[r]);
  return o;
}, i = (o, e) => f(o, p(e));
import R, { forwardRef as d } from "react";
import l from "../lib/SSRBase.mjs";
import u from "../defs/HouseLine.mjs";
const w = d((o, e) => /* @__PURE__ */ R.createElement(l, i(a({ ref: e }, o), { weights: u })));
w.displayName = "HouseLine";
export {
  w as HouseLine
};
