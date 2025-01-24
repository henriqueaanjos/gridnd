var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var m = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var o = (e, a, r) => a in e ? f(e, a, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[a] = r, t = (e, a) => {
  for (var r in a || (a = {}))
    c.call(a, r) && o(e, r, a[r]);
  if (m)
    for (var r of m(a))
      l.call(a, r) && o(e, r, a[r]);
  return e;
}, s = (e, a) => i(e, p(a));
import h, { forwardRef as n } from "react";
import d from "../lib/IconBase.mjs";
import w from "../defs/CameraSlash.mjs";
const C = n((e, a) => /* @__PURE__ */ h.createElement(d, s(t({ ref: a }, e), { weights: w })));
C.displayName = "CameraSlash";
export {
  C as CameraSlash
};
