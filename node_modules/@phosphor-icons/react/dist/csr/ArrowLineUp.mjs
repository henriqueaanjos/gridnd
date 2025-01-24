var p = Object.defineProperty, f = Object.defineProperties;
var n = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var m = (e, r, o) => r in e ? p(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o, a = (e, r) => {
  for (var o in r || (r = {}))
    s.call(r, o) && m(e, o, r[o]);
  if (t)
    for (var o of t(r))
      c.call(r, o) && m(e, o, r[o]);
  return e;
}, i = (e, r) => f(e, n(r));
import w, { forwardRef as d } from "react";
import l from "../lib/IconBase.mjs";
import A from "../defs/ArrowLineUp.mjs";
const I = d((e, r) => /* @__PURE__ */ w.createElement(l, i(a({ ref: r }, e), { weights: A })));
I.displayName = "ArrowLineUp";
export {
  I as ArrowLineUp
};
