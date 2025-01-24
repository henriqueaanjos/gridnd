var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var m = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, S = Object.prototype.propertyIsEnumerable;
var o = (e, a, r) => a in e ? f(e, a, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[a] = r, t = (e, a) => {
  for (var r in a || (a = {}))
    l.call(a, r) && o(e, r, a[r]);
  if (m)
    for (var r of m(a))
      S.call(a, r) && o(e, r, a[r]);
  return e;
}, s = (e, a) => i(e, p(a));
import c, { forwardRef as h } from "react";
import R from "../lib/SSRBase.mjs";
import d from "../defs/CameraSlash.mjs";
const n = h((e, a) => /* @__PURE__ */ c.createElement(R, s(t({ ref: a }, e), { weights: d })));
n.displayName = "CameraSlash";
export {
  n as CameraSlash
};
