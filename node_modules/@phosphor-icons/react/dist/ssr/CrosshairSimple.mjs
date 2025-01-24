var t = Object.defineProperty, p = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var m = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, S = Object.prototype.propertyIsEnumerable;
var a = (e, r, o) => r in e ? t(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o, i = (e, r) => {
  for (var o in r || (r = {}))
    l.call(r, o) && a(e, o, r[o]);
  if (m)
    for (var o of m(r))
      S.call(r, o) && a(e, o, r[o]);
  return e;
}, s = (e, r) => p(e, f(r));
import c, { forwardRef as h } from "react";
import R from "../lib/SSRBase.mjs";
import d from "../defs/CrosshairSimple.mjs";
const n = h((e, r) => /* @__PURE__ */ c.createElement(R, s(i({ ref: r }, e), { weights: d })));
n.displayName = "CrosshairSimple";
export {
  n as CrosshairSimple
};
