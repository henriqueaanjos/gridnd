var i = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var s = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var t = (r, e, o) => e in r ? i(r, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[e] = o, m = (r, e) => {
  for (var o in e || (e = {}))
    l.call(e, o) && t(r, o, e[o]);
  if (s)
    for (var o of s(e))
      n.call(e, o) && t(r, o, e[o]);
  return r;
}, a = (r, e) => f(r, p(e));
import u, { forwardRef as c } from "react";
import R from "../lib/SSRBase.mjs";
import d from "../defs/PlusMinus.mjs";
const w = c((r, e) => /* @__PURE__ */ u.createElement(R, a(m({ ref: e }, r), { weights: d })));
w.displayName = "PlusMinus";
export {
  w as PlusMinus
};
