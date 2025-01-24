var p = Object.defineProperty, n = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var i = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var o = (r, e, a) => e in r ? p(r, e, { enumerable: !0, configurable: !0, writable: !0, value: a }) : r[e] = a, t = (r, e) => {
  for (var a in e || (e = {}))
    s.call(e, a) && o(r, a, e[a]);
  if (i)
    for (var a of i(e))
      c.call(e, a) && o(r, a, e[a]);
  return r;
}, m = (r, e) => n(r, f(e));
import R, { forwardRef as d } from "react";
import l from "../lib/SSRBase.mjs";
import w from "../defs/MapPinLine.mjs";
const L = d((r, e) => /* @__PURE__ */ R.createElement(l, m(t({ ref: e }, r), { weights: w })));
L.displayName = "MapPinLine";
export {
  L as MapPinLine
};
