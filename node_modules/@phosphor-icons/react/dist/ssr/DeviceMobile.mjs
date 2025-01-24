var c = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var i = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var t = (o, e, r) => e in o ? c(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, m = (o, e) => {
  for (var r in e || (e = {}))
    s.call(e, r) && t(o, r, e[r]);
  if (i)
    for (var r of i(e))
      l.call(e, r) && t(o, r, e[r]);
  return o;
}, a = (o, e) => f(o, p(e));
import R, { forwardRef as b } from "react";
import d from "../lib/SSRBase.mjs";
import n from "../defs/DeviceMobile.mjs";
const v = b((o, e) => /* @__PURE__ */ R.createElement(d, a(m({ ref: e }, o), { weights: n })));
v.displayName = "DeviceMobile";
export {
  v as DeviceMobile
};
