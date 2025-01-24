var c = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, R = Object.prototype.propertyIsEnumerable;
var m = (e, r, o) => r in e ? c(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o, a = (e, r) => {
  for (var o in r || (r = {}))
    s.call(r, o) && m(e, o, r[o]);
  if (t)
    for (var o of t(r))
      R.call(r, o) && m(e, o, r[o]);
  return e;
}, i = (e, r) => f(e, p(r));
import d, { forwardRef as k } from "react";
import l from "../lib/SSRBase.mjs";
import n from "../defs/FireTruck.mjs";
const u = k((e, r) => /* @__PURE__ */ d.createElement(l, i(a({ ref: r }, e), { weights: n })));
u.displayName = "FireTruck";
export {
  u as FireTruck
};
