var i = Object.defineProperty, n = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, S = Object.prototype.propertyIsEnumerable;
var p = (r, e, a) => e in r ? i(r, e, { enumerable: !0, configurable: !0, writable: !0, value: a }) : r[e] = a, t = (r, e) => {
  for (var a in e || (e = {}))
    s.call(e, a) && p(r, a, e[a]);
  if (o)
    for (var a of o(e))
      S.call(e, a) && p(r, a, e[a]);
  return r;
}, m = (r, e) => n(r, f(e));
import c, { forwardRef as R } from "react";
import d from "../lib/SSRBase.mjs";
import l from "../defs/SpinnerGap.mjs";
const w = R((r, e) => /* @__PURE__ */ c.createElement(d, m(t({ ref: e }, r), { weights: l })));
w.displayName = "SpinnerGap";
export {
  w as SpinnerGap
};
