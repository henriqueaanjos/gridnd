var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var m = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var o = (r, e, a) => e in r ? f(r, e, { enumerable: !0, configurable: !0, writable: !0, value: a }) : r[e] = a, t = (r, e) => {
  for (var a in e || (e = {}))
    l.call(e, a) && o(r, a, e[a]);
  if (m)
    for (var a of m(e))
      c.call(e, a) && o(r, a, e[a]);
  return r;
}, s = (r, e) => i(r, p(e));
import R, { forwardRef as d } from "react";
import n from "../lib/SSRBase.mjs";
import u from "../defs/CameraPlus.mjs";
const w = d((r, e) => /* @__PURE__ */ R.createElement(n, s(t({ ref: e }, r), { weights: u })));
w.displayName = "CameraPlus";
export {
  w as CameraPlus
};
