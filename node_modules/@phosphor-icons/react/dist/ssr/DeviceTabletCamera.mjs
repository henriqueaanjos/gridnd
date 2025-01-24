var c = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var m = (a, e, r) => e in a ? c(a, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : a[e] = r, o = (a, e) => {
  for (var r in e || (e = {}))
    s.call(e, r) && m(a, r, e[r]);
  if (t)
    for (var r of t(e))
      l.call(e, r) && m(a, r, e[r]);
  return a;
}, i = (a, e) => f(a, p(e));
import R, { forwardRef as b } from "react";
import d from "../lib/SSRBase.mjs";
import n from "../defs/DeviceTabletCamera.mjs";
const v = b((a, e) => /* @__PURE__ */ R.createElement(d, i(o({ ref: e }, a), { weights: n })));
v.displayName = "DeviceTabletCamera";
export {
  v as DeviceTabletCamera
};
