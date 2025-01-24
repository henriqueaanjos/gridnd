var p = Object.defineProperty, f = Object.defineProperties;
var i = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, k = Object.prototype.propertyIsEnumerable;
var t = (e, a, o) => a in e ? p(e, a, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[a] = o, c = (e, a) => {
  for (var o in a || (a = {}))
    s.call(a, o) && t(e, o, a[o]);
  if (r)
    for (var o of r(a))
      k.call(a, o) && t(e, o, a[o]);
  return e;
}, m = (e, a) => f(e, i(a));
import n, { forwardRef as B } from "react";
import d from "../lib/IconBase.mjs";
import l from "../defs/Backpack.mjs";
const w = B((e, a) => /* @__PURE__ */ n.createElement(d, m(c({ ref: a }, e), { weights: l })));
w.displayName = "Backpack";
export {
  w as Backpack
};
