var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var t = (e, r, o) => r in e ? f(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o, m = (e, r) => {
  for (var o in r || (r = {}))
    c.call(r, o) && t(e, o, r[o]);
  if (a)
    for (var o of a(r))
      n.call(r, o) && t(e, o, r[o]);
  return e;
}, s = (e, r) => i(e, p(r));
import E, { forwardRef as d } from "react";
import l from "../lib/IconBase.mjs";
import w from "../defs/Eraser.mjs";
const I = d((e, r) => /* @__PURE__ */ E.createElement(l, s(m({ ref: r }, e), { weights: w })));
I.displayName = "Eraser";
export {
  I as Eraser
};
