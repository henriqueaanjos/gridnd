var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var m = (e, r, o) => r in e ? f(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o, a = (e, r) => {
  for (var o in r || (r = {}))
    s.call(r, o) && m(e, o, r[o]);
  if (t)
    for (var o of t(r))
      n.call(r, o) && m(e, o, r[o]);
  return e;
}, c = (e, r) => i(e, p(r));
import d, { forwardRef as k } from "react";
import l from "../lib/IconBase.mjs";
import u from "../defs/Truck.mjs";
const w = k((e, r) => /* @__PURE__ */ d.createElement(l, c(a({ ref: r }, e), { weights: u })));
w.displayName = "Truck";
export {
  w as Truck
};
