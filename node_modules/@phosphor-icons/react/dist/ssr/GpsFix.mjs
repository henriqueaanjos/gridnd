var p = Object.defineProperty, s = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, x = Object.prototype.propertyIsEnumerable;
var m = (r, e, o) => e in r ? p(r, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[e] = o, a = (r, e) => {
  for (var o in e || (e = {}))
    c.call(e, o) && m(r, o, e[o]);
  if (t)
    for (var o of t(e))
      x.call(e, o) && m(r, o, e[o]);
  return r;
}, i = (r, e) => s(r, f(e));
import R, { forwardRef as d } from "react";
import l from "../lib/SSRBase.mjs";
import n from "../defs/GpsFix.mjs";
const w = d((r, e) => /* @__PURE__ */ R.createElement(l, i(a({ ref: e }, r), { weights: n })));
w.displayName = "GpsFix";
export {
  w as GpsFix
};
