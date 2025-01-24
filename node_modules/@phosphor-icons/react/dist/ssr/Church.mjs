var f = Object.defineProperty, h = Object.defineProperties;
var i = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var m = (e, r, o) => r in e ? f(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o, a = (e, r) => {
  for (var o in r || (r = {}))
    p.call(r, o) && m(e, o, r[o]);
  if (t)
    for (var o of t(r))
      s.call(r, o) && m(e, o, r[o]);
  return e;
}, c = (e, r) => h(e, i(r));
import R, { forwardRef as d } from "react";
import l from "../lib/SSRBase.mjs";
import n from "../defs/Church.mjs";
const u = d((e, r) => /* @__PURE__ */ R.createElement(l, c(a({ ref: r }, e), { weights: n })));
u.displayName = "Church";
export {
  u as Church
};
