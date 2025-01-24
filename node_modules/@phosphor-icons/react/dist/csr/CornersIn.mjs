var s = Object.defineProperty, f = Object.defineProperties;
var i = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var m = (e, r, o) => r in e ? s(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o, a = (e, r) => {
  for (var o in r || (r = {}))
    p.call(r, o) && m(e, o, r[o]);
  if (t)
    for (var o of t(r))
      c.call(r, o) && m(e, o, r[o]);
  return e;
}, n = (e, r) => f(e, i(r));
import I, { forwardRef as d } from "react";
import l from "../lib/IconBase.mjs";
import w from "../defs/CornersIn.mjs";
const C = d((e, r) => /* @__PURE__ */ I.createElement(l, n(a({ ref: r }, e), { weights: w })));
C.displayName = "CornersIn";
export {
  C as CornersIn
};
