var s = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var d = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var m = (a, e, r) => e in a ? s(a, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : a[e] = r, t = (a, e) => {
  for (var r in e || (e = {}))
    d.call(e, r) && m(a, r, e[r]);
  if (o)
    for (var r of o(e))
      l.call(e, r) && m(a, r, e[r]);
  return a;
}, i = (a, e) => f(a, p(e));
import S, { forwardRef as c } from "react";
import h from "../lib/SSRBase.mjs";
import R from "../defs/VideoCameraSlash.mjs";
const n = c((a, e) => /* @__PURE__ */ S.createElement(h, i(t({ ref: e }, a), { weights: R })));
n.displayName = "VideoCameraSlash";
export {
  n as VideoCameraSlash
};
