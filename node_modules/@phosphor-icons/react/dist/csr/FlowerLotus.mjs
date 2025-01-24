var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var m = (e, o, r) => o in e ? f(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, a = (e, o) => {
  for (var r in o || (o = {}))
    c.call(o, r) && m(e, r, o[r]);
  if (t)
    for (var r of t(o))
      l.call(o, r) && m(e, r, o[r]);
  return e;
}, s = (e, o) => i(e, p(o));
import w, { forwardRef as n } from "react";
import d from "../lib/IconBase.mjs";
import u from "../defs/FlowerLotus.mjs";
const F = n((e, o) => /* @__PURE__ */ w.createElement(d, s(a({ ref: o }, e), { weights: u })));
F.displayName = "FlowerLotus";
export {
  F as FlowerLotus
};
