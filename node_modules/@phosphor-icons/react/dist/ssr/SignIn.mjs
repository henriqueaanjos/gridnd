var n = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, S = Object.prototype.propertyIsEnumerable;
var m = (r, e, o) => e in r ? n(r, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[e] = o, a = (r, e) => {
  for (var o in e || (e = {}))
    s.call(e, o) && m(r, o, e[o]);
  if (t)
    for (var o of t(e))
      S.call(e, o) && m(r, o, e[o]);
  return r;
}, i = (r, e) => f(r, p(e));
import c, { forwardRef as g } from "react";
import I from "../lib/SSRBase.mjs";
import R from "../defs/SignIn.mjs";
const d = g((r, e) => /* @__PURE__ */ c.createElement(I, i(a({ ref: e }, r), { weights: R })));
d.displayName = "SignIn";
export {
  d as SignIn
};
