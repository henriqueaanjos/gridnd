var f = Object.defineProperty, i = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, w = Object.prototype.propertyIsEnumerable;
var t = (o, r, e) => r in o ? f(o, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : o[r] = e, m = (o, r) => {
  for (var e in r || (r = {}))
    c.call(r, e) && t(o, e, r[e]);
  if (a)
    for (var e of a(r))
      w.call(r, e) && t(o, e, r[e]);
  return o;
}, p = (o, r) => i(o, s(r));
import n, { forwardRef as y } from "react";
import d from "../lib/IconBase.mjs";
import l from "../defs/TrayArrowUp.mjs";
const A = y((o, r) => /* @__PURE__ */ n.createElement(d, p(m({ ref: r }, o), { weights: l })));
A.displayName = "TrayArrowUp";
export {
  A as TrayArrowUp
};
