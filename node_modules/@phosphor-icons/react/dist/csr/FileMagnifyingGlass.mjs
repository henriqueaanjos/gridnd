var m = Object.defineProperty, f = Object.defineProperties;
var l = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var n = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var o = (a, e, i) => e in a ? m(a, e, { enumerable: !0, configurable: !0, writable: !0, value: i }) : a[e] = i, s = (a, e) => {
  for (var i in e || (e = {}))
    n.call(e, i) && o(a, i, e[i]);
  if (r)
    for (var i of r(e))
      c.call(e, i) && o(a, i, e[i]);
  return a;
}, t = (a, e) => f(a, l(e));
import g, { forwardRef as p } from "react";
import y from "../lib/IconBase.mjs";
import F from "../defs/FileMagnifyingGlass.mjs";
const d = p((a, e) => /* @__PURE__ */ g.createElement(y, t(s({ ref: e }, a), { weights: F })));
d.displayName = "FileMagnifyingGlass";
export {
  d as FileMagnifyingGlass,
  d as FileSearch
};
