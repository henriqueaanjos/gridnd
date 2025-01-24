var c = Object.defineProperty, f = Object.defineProperties;
var i = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var o = (a, e, m) => e in a ? c(a, e, { enumerable: !0, configurable: !0, writable: !0, value: m }) : a[e] = m, t = (a, e) => {
  for (var m in e || (e = {}))
    p.call(e, m) && o(a, m, e[m]);
  if (r)
    for (var m of r(e))
      l.call(e, m) && o(a, m, e[m]);
  return a;
}, s = (a, e) => f(a, i(e));
import S, { forwardRef as h } from "react";
import R from "../lib/SSRBase.mjs";
import b from "../defs/WebcamSlash.mjs";
const d = h((a, e) => /* @__PURE__ */ S.createElement(R, s(t({ ref: e }, a), { weights: b })));
d.displayName = "WebcamSlash";
export {
  d as WebcamSlash
};
