var c = Object.defineProperty, f = Object.defineProperties;
var i = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var t = (r, e, a) => e in r ? c(r, e, { enumerable: !0, configurable: !0, writable: !0, value: a }) : r[e] = a, m = (r, e) => {
  for (var a in e || (e = {}))
    p.call(e, a) && t(r, a, e[a]);
  if (o)
    for (var a of o(e))
      l.call(e, a) && t(r, a, e[a]);
  return r;
}, s = (r, e) => f(r, i(e));
import S, { forwardRef as R } from "react";
import d from "../lib/SSRBase.mjs";
import n from "../defs/Scales.mjs";
const w = R((r, e) => /* @__PURE__ */ S.createElement(d, s(m({ ref: e }, r), { weights: n })));
w.displayName = "Scales";
export {
  w as Scales
};
