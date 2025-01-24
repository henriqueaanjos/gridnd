var f = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var d = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var m = (o, r, e) => r in o ? f(o, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : o[r] = e, a = (o, r) => {
  for (var e in r || (r = {}))
    d.call(r, e) && m(o, e, r[e]);
  if (t)
    for (var e of t(r))
      c.call(r, e) && m(o, e, r[e]);
  return o;
}, i = (o, r) => p(o, s(r));
import R, { forwardRef as l } from "react";
import n from "../lib/SSRBase.mjs";
import u from "../defs/GridFour.mjs";
const w = l((o, r) => /* @__PURE__ */ R.createElement(n, i(a({ ref: r }, o), { weights: u })));
w.displayName = "GridFour";
export {
  w as GridFour
};
