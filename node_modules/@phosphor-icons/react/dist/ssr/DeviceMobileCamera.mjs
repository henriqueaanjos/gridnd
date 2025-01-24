var c = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var m = (r, e, a) => e in r ? c(r, e, { enumerable: !0, configurable: !0, writable: !0, value: a }) : r[e] = a, i = (r, e) => {
  for (var a in e || (e = {}))
    s.call(e, a) && m(r, a, e[a]);
  if (o)
    for (var a of o(e))
      l.call(e, a) && m(r, a, e[a]);
  return r;
}, t = (r, e) => f(r, p(e));
import R, { forwardRef as b } from "react";
import d from "../lib/SSRBase.mjs";
import n from "../defs/DeviceMobileCamera.mjs";
const v = b((r, e) => /* @__PURE__ */ R.createElement(d, t(i({ ref: e }, r), { weights: n })));
v.displayName = "DeviceMobileCamera";
export {
  v as DeviceMobileCamera
};
