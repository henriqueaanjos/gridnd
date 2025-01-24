var i = Object.defineProperty, s = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var m = (r, e, o) => e in r ? i(r, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[e] = o, a = (r, e) => {
  for (var o in e || (e = {}))
    p.call(e, o) && m(r, o, e[o]);
  if (t)
    for (var o of t(e))
      l.call(e, o) && m(r, o, e[o]);
  return r;
}, c = (r, e) => s(r, f(e));
import C, { forwardRef as h } from "react";
import R from "../lib/SSRBase.mjs";
import d from "../defs/UserCircleCheck.mjs";
const k = h((r, e) => /* @__PURE__ */ C.createElement(R, c(a({ ref: e }, r), { weights: d })));
k.displayName = "UserCircleCheck";
export {
  k as UserCircleCheck
};
