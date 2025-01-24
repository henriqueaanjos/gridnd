var s = Object.defineProperty, l = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var m = (r, e, o) => e in r ? s(r, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[e] = o, a = (r, e) => {
  for (var o in e || (e = {}))
    p.call(e, o) && m(r, o, e[o]);
  if (t)
    for (var o of t(e))
      d.call(e, o) && m(r, o, e[o]);
  return r;
}, i = (r, e) => l(r, f(e));
import S, { forwardRef as c } from "react";
import h from "../lib/SSRBase.mjs";
import R from "../defs/ShieldPlus.mjs";
const n = c((r, e) => /* @__PURE__ */ S.createElement(h, i(a({ ref: e }, r), { weights: R })));
n.displayName = "ShieldPlus";
export {
  n as ShieldPlus
};
