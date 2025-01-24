var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var m = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var o = (r, e, a) => e in r ? f(r, e, { enumerable: !0, configurable: !0, writable: !0, value: a }) : r[e] = a, t = (r, e) => {
  for (var a in e || (e = {}))
    c.call(e, a) && o(r, a, e[a]);
  if (m)
    for (var a of m(e))
      l.call(e, a) && o(r, a, e[a]);
  return r;
}, s = (r, e) => i(r, p(e));
import n, { forwardRef as d } from "react";
import u from "../lib/IconBase.mjs";
import w from "../defs/CameraPlus.mjs";
const C = d((r, e) => /* @__PURE__ */ n.createElement(u, s(t({ ref: e }, r), { weights: w })));
C.displayName = "CameraPlus";
export {
  C as CameraPlus
};
