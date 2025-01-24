var s = Object.defineProperty, d = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var r = (t, e, a) => e in t ? s(t, e, { enumerable: !0, configurable: !0, writable: !0, value: a }) : t[e] = a, i = (t, e) => {
  for (var a in e || (e = {}))
    l.call(e, a) && r(t, a, e[a]);
  if (o)
    for (var a of o(e))
      p.call(e, a) && r(t, a, e[a]);
  return t;
}, m = (t, e) => d(t, f(e));
import c, { forwardRef as h } from "react";
import D from "../lib/SSRBase.mjs";
import F from "../defs/FileDashed.mjs";
const R = h((t, e) => /* @__PURE__ */ c.createElement(D, m(i({ ref: e }, t), { weights: F })));
R.displayName = "FileDashed";
export {
  R as FileDashed,
  R as FileDotted
};
