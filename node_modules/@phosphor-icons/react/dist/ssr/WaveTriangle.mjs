var f = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var t = (r, e, a) => e in r ? f(r, e, { enumerable: !0, configurable: !0, writable: !0, value: a }) : r[e] = a, m = (r, e) => {
  for (var a in e || (e = {}))
    l.call(e, a) && t(r, a, e[a]);
  if (o)
    for (var a of o(e))
      n.call(e, a) && t(r, a, e[a]);
  return r;
}, i = (r, e) => p(r, s(e));
import c, { forwardRef as g } from "react";
import R from "../lib/SSRBase.mjs";
import d from "../defs/WaveTriangle.mjs";
const v = g((r, e) => /* @__PURE__ */ c.createElement(R, i(m({ ref: e }, r), { weights: d })));
v.displayName = "WaveTriangle";
export {
  v as WaveTriangle
};
