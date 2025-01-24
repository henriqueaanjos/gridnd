var p = Object.defineProperty, s = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var m = (e, r, o) => r in e ? p(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o, a = (e, r) => {
  for (var o in r || (r = {}))
    c.call(r, o) && m(e, o, r[o]);
  if (t)
    for (var o of t(r))
      l.call(r, o) && m(e, o, r[o]);
  return e;
}, i = (e, r) => s(e, f(r));
import w, { forwardRef as n } from "react";
import d from "../lib/IconBase.mjs";
import u from "../defs/ArrowsOutSimple.mjs";
const A = n((e, r) => /* @__PURE__ */ w.createElement(d, i(a({ ref: r }, e), { weights: u })));
A.displayName = "ArrowsOutSimple";
export {
  A as ArrowsOutSimple
};
