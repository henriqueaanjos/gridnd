var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, g = Object.prototype.propertyIsEnumerable;
var t = (a, e, o) => e in a ? f(a, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : a[e] = o, m = (a, e) => {
  for (var o in e || (e = {}))
    s.call(e, o) && t(a, o, e[o]);
  if (r)
    for (var o of r(e))
      g.call(e, o) && t(a, o, e[o]);
  return a;
}, c = (a, e) => i(a, p(e));
import n, { forwardRef as d } from "react";
import k from "../lib/IconBase.mjs";
import l from "../defs/Package.mjs";
const w = d((a, e) => /* @__PURE__ */ n.createElement(k, c(m({ ref: e }, a), { weights: l })));
w.displayName = "Package";
export {
  w as Package
};
