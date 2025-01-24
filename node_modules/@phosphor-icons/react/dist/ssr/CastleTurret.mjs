var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var o = (r, e, t) => e in r ? f(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t, m = (r, e) => {
  for (var t in e || (e = {}))
    l.call(e, t) && o(r, t, e[t]);
  if (a)
    for (var t of a(e))
      c.call(e, t) && o(r, t, e[t]);
  return r;
}, s = (r, e) => i(r, p(e));
import R, { forwardRef as d } from "react";
import n from "../lib/SSRBase.mjs";
import u from "../defs/CastleTurret.mjs";
const w = d((r, e) => /* @__PURE__ */ R.createElement(n, s(m({ ref: e }, r), { weights: u })));
w.displayName = "CastleTurret";
export {
  w as CastleTurret
};
