var n = Object.defineProperty, s = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var i = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (r, a, e) => a in r ? n(r, a, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[a] = e, t = (r, a) => {
  for (var e in a || (a = {}))
    l.call(a, e) && o(r, e, a[e]);
  if (i)
    for (var e of i(a))
      p.call(a, e) && o(r, e, a[e]);
  return r;
}, m = (r, a) => s(r, f(a));
import c, { forwardRef as g } from "react";
import S from "../lib/SSRBase.mjs";
import W from "../defs/SealWarning.mjs";
const R = g((r, a) => /* @__PURE__ */ c.createElement(S, m(t({ ref: a }, r), { weights: W })));
R.displayName = "SealWarning";
export {
  R as CircleWavyWarning,
  R as SealWarning
};
