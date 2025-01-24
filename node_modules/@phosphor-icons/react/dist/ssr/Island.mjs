var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var d = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var t = (r, e, a) => e in r ? f(r, e, { enumerable: !0, configurable: !0, writable: !0, value: a }) : r[e] = a, m = (r, e) => {
  for (var a in e || (e = {}))
    d.call(e, a) && t(r, a, e[a]);
  if (o)
    for (var a of o(e))
      l.call(e, a) && t(r, a, e[a]);
  return r;
}, s = (r, e) => i(r, p(e));
import n, { forwardRef as c } from "react";
import I from "../lib/SSRBase.mjs";
import R from "../defs/Island.mjs";
const w = c((r, e) => /* @__PURE__ */ n.createElement(I, s(m({ ref: e }, r), { weights: R })));
w.displayName = "Island";
export {
  w as Island
};
