var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var e = Object.getOwnPropertySymbols;
var n = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var m = (r, a, o) => a in r ? i(r, a, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[a] = o, t = (r, a) => {
  for (var o in a || (a = {}))
    n.call(a, o) && m(r, o, a[o]);
  if (e)
    for (var o of e(a))
      c.call(a, o) && m(r, o, a[o]);
  return r;
}, f = (r, a) => p(r, s(a));
import R, { forwardRef as d } from "react";
import l from "../lib/SSRBase.mjs";
import w from "../defs/Panorama.mjs";
const P = d((r, a) => /* @__PURE__ */ R.createElement(l, f(t({ ref: a }, r), { weights: w })));
P.displayName = "Panorama";
export {
  P as Panorama
};
