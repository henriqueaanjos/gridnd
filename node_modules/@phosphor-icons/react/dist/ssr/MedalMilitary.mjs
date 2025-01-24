var l = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var i = (r, e, a) => e in r ? l(r, e, { enumerable: !0, configurable: !0, writable: !0, value: a }) : r[e] = a, o = (r, e) => {
  for (var a in e || (e = {}))
    s.call(e, a) && i(r, a, e[a]);
  if (t)
    for (var a of t(e))
      d.call(e, a) && i(r, a, e[a]);
  return r;
}, m = (r, e) => f(r, p(e));
import M, { forwardRef as c } from "react";
import y from "../lib/SSRBase.mjs";
import R from "../defs/MedalMilitary.mjs";
const n = c((r, e) => /* @__PURE__ */ M.createElement(y, m(o({ ref: e }, r), { weights: R })));
n.displayName = "MedalMilitary";
export {
  n as MedalMilitary
};
