var f = Object.defineProperty, i = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var w = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var t = (o, r, e) => r in o ? f(o, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : o[r] = e, m = (o, r) => {
  for (var e in r || (r = {}))
    w.call(r, e) && t(o, e, r[e]);
  if (a)
    for (var e of a(r))
      c.call(r, e) && t(o, e, r[e]);
  return o;
}, p = (o, r) => i(o, s(r));
import y, { forwardRef as R } from "react";
import d from "../lib/SSRBase.mjs";
import l from "../defs/TrayArrowUp.mjs";
const n = R((o, r) => /* @__PURE__ */ y.createElement(d, p(m({ ref: r }, o), { weights: l })));
n.displayName = "TrayArrowUp";
export {
  n as TrayArrowUp
};
