var p = Object.defineProperty, f = Object.defineProperties;
var i = Object.getOwnPropertyDescriptors;
var m = Object.getOwnPropertySymbols;
var d = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var a = (e, r, o) => r in e ? p(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o, s = (e, r) => {
  for (var o in r || (r = {}))
    d.call(r, o) && a(e, o, r[o]);
  if (m)
    for (var o of m(r))
      n.call(r, o) && a(e, o, r[o]);
  return e;
}, t = (e, r) => f(e, i(r));
import S, { forwardRef as c } from "react";
import R from "../lib/SSRBase.mjs";
import l from "../defs/PersonArmsSpread.mjs";
const w = c((e, r) => /* @__PURE__ */ S.createElement(R, t(s({ ref: r }, e), { weights: l })));
w.displayName = "PersonArmsSpread";
export {
  w as PersonArmsSpread
};
