var m = Object.defineProperty, f = Object.defineProperties;
var l = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var n = Object.prototype.hasOwnProperty, g = Object.prototype.propertyIsEnumerable;
var s = (a, e, i) => e in a ? m(a, e, { enumerable: !0, configurable: !0, writable: !0, value: i }) : a[e] = i, o = (a, e) => {
  for (var i in e || (e = {}))
    n.call(e, i) && s(a, i, e[i]);
  if (r)
    for (var i of r(e))
      g.call(e, i) && s(a, i, e[i]);
  return a;
}, t = (a, e) => f(a, l(e));
import p, { forwardRef as c } from "react";
import y from "../lib/SSRBase.mjs";
import F from "../defs/FileMagnifyingGlass.mjs";
const R = c((a, e) => /* @__PURE__ */ p.createElement(y, t(o({ ref: e }, a), { weights: F })));
R.displayName = "FileMagnifyingGlass";
export {
  R as FileMagnifyingGlass,
  R as FileSearch
};
