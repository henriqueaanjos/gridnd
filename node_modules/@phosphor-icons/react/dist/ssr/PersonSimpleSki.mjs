var p = Object.defineProperty, s = Object.defineProperties;
var S = Object.getOwnPropertyDescriptors;
var m = Object.getOwnPropertySymbols;
var f = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var i = (r, e, o) => e in r ? p(r, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[e] = o, t = (r, e) => {
  for (var o in e || (e = {}))
    f.call(e, o) && i(r, o, e[o]);
  if (m)
    for (var o of m(e))
      l.call(e, o) && i(r, o, e[o]);
  return r;
}, a = (r, e) => s(r, S(e));
import n, { forwardRef as c } from "react";
import R from "../lib/SSRBase.mjs";
import d from "../defs/PersonSimpleSki.mjs";
const k = c((r, e) => /* @__PURE__ */ n.createElement(R, a(t({ ref: e }, r), { weights: d })));
k.displayName = "PersonSimpleSki";
export {
  k as PersonSimpleSki
};
