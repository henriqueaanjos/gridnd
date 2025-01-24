var c = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, R = Object.prototype.propertyIsEnumerable;
var r = (a, e, o) => e in a ? c(a, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : a[e] = o, i = (a, e) => {
  for (var o in e || (e = {}))
    s.call(e, o) && r(a, o, e[o]);
  if (t)
    for (var o of t(e))
      R.call(e, o) && r(a, o, e[o]);
  return a;
}, m = (a, e) => f(a, p(e));
import d, { forwardRef as l } from "react";
import n from "../lib/SSRBase.mjs";
import v from "../defs/Radioactive.mjs";
const w = l((a, e) => /* @__PURE__ */ d.createElement(n, m(i({ ref: e }, a), { weights: v })));
w.displayName = "Radioactive";
export {
  w as Radioactive
};
