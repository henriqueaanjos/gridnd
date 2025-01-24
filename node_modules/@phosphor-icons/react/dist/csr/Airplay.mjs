var p = Object.defineProperty, f = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var t = (e, r, o) => r in e ? p(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o, m = (e, r) => {
  for (var o in r || (r = {}))
    c.call(r, o) && t(e, o, r[o]);
  if (a)
    for (var o of a(r))
      l.call(r, o) && t(e, o, r[o]);
  return e;
}, i = (e, r) => f(e, s(r));
import n, { forwardRef as y } from "react";
import d from "../lib/IconBase.mjs";
import w from "../defs/Airplay.mjs";
const A = y((e, r) => /* @__PURE__ */ n.createElement(d, i(m({ ref: r }, e), { weights: w })));
A.displayName = "Airplay";
export {
  A as Airplay
};
