var c = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var m = (e, r, o) => r in e ? c(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o, a = (e, r) => {
  for (var o in r || (r = {}))
    s.call(r, o) && m(e, o, r[o]);
  if (t)
    for (var o of t(r))
      d.call(r, o) && m(e, o, r[o]);
  return e;
}, i = (e, r) => f(e, p(r));
import w, { forwardRef as n } from "react";
import l from "../lib/IconBase.mjs";
import v from "../defs/Screwdriver.mjs";
const I = n((e, r) => /* @__PURE__ */ w.createElement(l, i(a({ ref: r }, e), { weights: v })));
I.displayName = "Screwdriver";
export {
  I as Screwdriver
};
