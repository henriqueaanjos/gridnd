var f = Object.defineProperty, i = Object.defineProperties;
var n = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var t = (o, r, e) => r in o ? f(o, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : o[r] = e, m = (o, r) => {
  for (var e in r || (r = {}))
    s.call(r, e) && t(o, e, r[e]);
  if (a)
    for (var e of a(r))
      c.call(r, e) && t(o, e, r[e]);
  return o;
}, p = (o, r) => i(o, n(r));
import d, { forwardRef as w } from "react";
import l from "../lib/IconBase.mjs";
import A from "../defs/HandArrowUp.mjs";
const H = w((o, r) => /* @__PURE__ */ d.createElement(l, p(m({ ref: r }, o), { weights: A })));
H.displayName = "HandArrowUp";
export {
  H as HandArrowUp
};
