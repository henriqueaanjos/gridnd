var f = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var m = (r, e, t) => e in r ? f(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t, a = (r, e) => {
  for (var t in e || (e = {}))
    l.call(e, t) && m(r, t, e[t]);
  if (o)
    for (var t of o(e))
      n.call(e, t) && m(r, t, e[t]);
  return r;
}, i = (r, e) => p(r, s(e));
import S, { forwardRef as c } from "react";
import g from "../lib/SSRBase.mjs";
import h from "../defs/SteeringWheel.mjs";
const R = c((r, e) => /* @__PURE__ */ S.createElement(g, i(a({ ref: e }, r), { weights: h })));
R.displayName = "SteeringWheel";
export {
  R as SteeringWheel
};
