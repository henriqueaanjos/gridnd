var m = Object.defineProperty, f = Object.defineProperties;
var n = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var g = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var i = (e, a, o) => a in e ? m(e, a, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[a] = o, s = (e, a) => {
  for (var o in a || (a = {}))
    g.call(a, o) && i(e, o, a[o]);
  if (r)
    for (var o of r(a))
      p.call(a, o) && i(e, o, a[o]);
  return e;
}, t = (e, a) => f(e, n(a));
import c, { forwardRef as l } from "react";
import y from "../lib/IconBase.mjs";
import d from "../defs/MagnifyingGlass.mjs";
const w = l((e, a) => /* @__PURE__ */ c.createElement(y, t(s({ ref: a }, e), { weights: d })));
w.displayName = "MagnifyingGlass";
export {
  w as MagnifyingGlass
};
