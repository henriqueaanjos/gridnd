var m = Object.defineProperty, c = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var f = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, h = Object.prototype.propertyIsEnumerable;
var i = (r, e, a) => e in r ? m(r, e, { enumerable: !0, configurable: !0, writable: !0, value: a }) : r[e] = a, o = (r, e) => {
  for (var a in e || (e = {}))
    s.call(e, a) && i(r, a, e[a]);
  if (f)
    for (var a of f(e))
      h.call(e, a) && i(r, a, e[a]);
  return r;
}, t = (r, e) => c(r, p(e));
import R, { forwardRef as d } from "react";
import l from "../lib/SSRBase.mjs";
import n from "../defs/OfficeChair.mjs";
const w = d((r, e) => /* @__PURE__ */ R.createElement(l, t(o({ ref: e }, r), { weights: n })));
w.displayName = "OfficeChair";
export {
  w as OfficeChair
};
