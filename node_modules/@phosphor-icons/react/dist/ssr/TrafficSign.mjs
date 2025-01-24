var m = Object.defineProperty, c = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var f = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var i = (e, r, a) => r in e ? m(e, r, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[r] = a, o = (e, r) => {
  for (var a in r || (r = {}))
    s.call(r, a) && i(e, a, r[a]);
  if (f)
    for (var a of f(r))
      n.call(r, a) && i(e, a, r[a]);
  return e;
}, t = (e, r) => c(e, p(r));
import S, { forwardRef as g } from "react";
import R from "../lib/SSRBase.mjs";
import d from "../defs/TrafficSign.mjs";
const l = g((e, r) => /* @__PURE__ */ S.createElement(R, t(o({ ref: r }, e), { weights: d })));
l.displayName = "TrafficSign";
export {
  l as TrafficSign
};
