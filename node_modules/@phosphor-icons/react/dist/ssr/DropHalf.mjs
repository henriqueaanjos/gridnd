var p = Object.defineProperty, i = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var t = (o, r, e) => r in o ? p(o, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : o[r] = e, m = (o, r) => {
  for (var e in r || (r = {}))
    l.call(r, e) && t(o, e, r[e]);
  if (a)
    for (var e of a(r))
      c.call(r, e) && t(o, e, r[e]);
  return o;
}, f = (o, r) => i(o, s(r));
import R, { forwardRef as d } from "react";
import n from "../lib/SSRBase.mjs";
import w from "../defs/DropHalf.mjs";
const D = d((o, r) => /* @__PURE__ */ R.createElement(n, f(m({ ref: r }, o), { weights: w })));
D.displayName = "DropHalf";
export {
  D as DropHalf
};
