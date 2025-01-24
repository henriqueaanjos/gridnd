var f = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var t = (e, r, o) => r in e ? f(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o, m = (e, r) => {
  for (var o in r || (r = {}))
    c.call(r, o) && t(e, o, r[o]);
  if (a)
    for (var o of a(r))
      d.call(r, o) && t(e, o, r[o]);
  return e;
}, i = (e, r) => p(e, s(r));
import n, { forwardRef as l } from "react";
import v from "../lib/IconBase.mjs";
import w from "../defs/HardDrive.mjs";
const D = l((e, r) => /* @__PURE__ */ n.createElement(v, i(m({ ref: r }, e), { weights: w })));
D.displayName = "HardDrive";
export {
  D as HardDrive
};
