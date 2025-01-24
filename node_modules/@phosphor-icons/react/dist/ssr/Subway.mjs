var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var w = Object.prototype.hasOwnProperty, S = Object.prototype.propertyIsEnumerable;
var t = (r, e, a) => e in r ? i(r, e, { enumerable: !0, configurable: !0, writable: !0, value: a }) : r[e] = a, m = (r, e) => {
  for (var a in e || (e = {}))
    w.call(e, a) && t(r, a, e[a]);
  if (o)
    for (var a of o(e))
      S.call(e, a) && t(r, a, e[a]);
  return r;
}, f = (r, e) => p(r, s(e));
import c, { forwardRef as y } from "react";
import R from "../lib/SSRBase.mjs";
import b from "../defs/Subway.mjs";
const d = y((r, e) => /* @__PURE__ */ c.createElement(R, f(m({ ref: e }, r), { weights: b })));
d.displayName = "Subway";
export {
  d as Subway
};
