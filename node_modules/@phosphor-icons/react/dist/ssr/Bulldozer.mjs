var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var m = (r, e, o) => e in r ? f(r, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[e] = o, a = (r, e) => {
  for (var o in e || (e = {}))
    s.call(e, o) && m(r, o, e[o]);
  if (t)
    for (var o of t(e))
      d.call(e, o) && m(r, o, e[o]);
  return r;
}, l = (r, e) => i(r, p(e));
import c, { forwardRef as B } from "react";
import R from "../lib/SSRBase.mjs";
import n from "../defs/Bulldozer.mjs";
const u = B((r, e) => /* @__PURE__ */ c.createElement(R, l(a({ ref: e }, r), { weights: n })));
u.displayName = "Bulldozer";
export {
  u as Bulldozer
};
