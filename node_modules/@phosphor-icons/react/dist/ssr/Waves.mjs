var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, R = Object.prototype.propertyIsEnumerable;
var t = (r, e, a) => e in r ? f(r, e, { enumerable: !0, configurable: !0, writable: !0, value: a }) : r[e] = a, m = (r, e) => {
  for (var a in e || (e = {}))
    c.call(e, a) && t(r, a, e[a]);
  if (o)
    for (var a of o(e))
      R.call(e, a) && t(r, a, e[a]);
  return r;
}, s = (r, e) => i(r, p(e));
import d, { forwardRef as l } from "react";
import n from "../lib/SSRBase.mjs";
import v from "../defs/Waves.mjs";
const w = l((r, e) => /* @__PURE__ */ d.createElement(n, s(m({ ref: e }, r), { weights: v })));
w.displayName = "Waves";
export {
  w as Waves
};
