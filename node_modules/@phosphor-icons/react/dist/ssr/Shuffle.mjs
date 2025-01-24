var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, S = Object.prototype.propertyIsEnumerable;
var t = (r, e, f) => e in r ? i(r, e, { enumerable: !0, configurable: !0, writable: !0, value: f }) : r[e] = f, m = (r, e) => {
  for (var f in e || (e = {}))
    l.call(e, f) && t(r, f, e[f]);
  if (o)
    for (var f of o(e))
      S.call(e, f) && t(r, f, e[f]);
  return r;
}, a = (r, e) => p(r, s(e));
import c, { forwardRef as h } from "react";
import R from "../lib/SSRBase.mjs";
import d from "../defs/Shuffle.mjs";
const n = h((r, e) => /* @__PURE__ */ c.createElement(R, a(m({ ref: e }, r), { weights: d })));
n.displayName = "Shuffle";
export {
  n as Shuffle
};
