var c = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var m = (o, e, r) => e in o ? c(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, i = (o, e) => {
  for (var r in e || (e = {}))
    s.call(e, r) && m(o, r, e[r]);
  if (a)
    for (var r of a(e))
      l.call(e, r) && m(o, r, e[r]);
  return o;
}, t = (o, e) => f(o, p(e));
import n, { forwardRef as b } from "react";
import d from "../lib/IconBase.mjs";
import v from "../defs/DeviceMobileCamera.mjs";
const w = b((o, e) => /* @__PURE__ */ n.createElement(d, t(i({ ref: e }, o), { weights: v })));
w.displayName = "DeviceMobileCamera";
export {
  w as DeviceMobileCamera
};
