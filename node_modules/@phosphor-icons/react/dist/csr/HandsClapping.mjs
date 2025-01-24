var i = Object.defineProperty, n = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var f = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var p = (e, a, o) => a in e ? i(e, a, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[a] = o, t = (e, a) => {
  for (var o in a || (a = {}))
    f.call(a, o) && p(e, o, a[o]);
  if (r)
    for (var o of r(a))
      c.call(a, o) && p(e, o, a[o]);
  return e;
}, m = (e, a) => n(e, s(a));
import d, { forwardRef as l } from "react";
import g from "../lib/IconBase.mjs";
import w from "../defs/HandsClapping.mjs";
const C = l((e, a) => /* @__PURE__ */ d.createElement(g, m(t({ ref: a }, e), { weights: w })));
C.displayName = "HandsClapping";
export {
  C as HandsClapping
};
