var p = Object.defineProperty, n = Object.defineProperties;
var c = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var f = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var m = (a, e, o) => e in a ? p(a, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : a[e] = o, r = (a, e) => {
  for (var o in e || (e = {}))
    f.call(e, o) && m(a, o, e[o]);
  if (t)
    for (var o of t(e))
      s.call(e, o) && m(a, o, e[o]);
  return a;
}, i = (a, e) => n(a, c(e));
import d, { forwardRef as L } from "react";
import R from "../lib/SSRBase.mjs";
import k from "../defs/LockLaminatedOpen.mjs";
const l = L((a, e) => /* @__PURE__ */ d.createElement(R, i(r({ ref: e }, a), { weights: k })));
l.displayName = "LockLaminatedOpen";
export {
  l as LockLaminatedOpen
};
