var m = Object.defineProperty, s = Object.defineProperties;
var c = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var f = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var i = (r, a, e) => a in r ? m(r, a, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[a] = e, n = (r, a) => {
  for (var e in a || (a = {}))
    f.call(a, e) && i(r, e, a[e]);
  if (o)
    for (var e of o(a))
      l.call(a, e) && i(r, e, a[e]);
  return r;
}, t = (r, a) => s(r, c(a));
import p, { forwardRef as g } from "react";
import W from "../lib/IconBase.mjs";
import d from "../defs/SealWarning.mjs";
const w = g((r, a) => /* @__PURE__ */ p.createElement(W, t(n({ ref: a }, r), { weights: d })));
w.displayName = "SealWarning";
export {
  w as CircleWavyWarning,
  w as SealWarning
};
