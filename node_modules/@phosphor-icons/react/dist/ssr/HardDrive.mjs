var f = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var d = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var t = (e, r, a) => r in e ? f(e, r, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[r] = a, m = (e, r) => {
  for (var a in r || (r = {}))
    d.call(r, a) && t(e, a, r[a]);
  if (o)
    for (var a of o(r))
      c.call(r, a) && t(e, a, r[a]);
  return e;
}, i = (e, r) => p(e, s(r));
import R, { forwardRef as l } from "react";
import n from "../lib/SSRBase.mjs";
import v from "../defs/HardDrive.mjs";
const w = l((e, r) => /* @__PURE__ */ R.createElement(n, i(m({ ref: r }, e), { weights: v })));
w.displayName = "HardDrive";
export {
  w as HardDrive
};
