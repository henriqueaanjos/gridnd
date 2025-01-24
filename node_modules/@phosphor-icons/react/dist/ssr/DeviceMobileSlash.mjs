var s = Object.defineProperty, l = Object.defineProperties;
var c = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var f = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var i = (o, e, r) => e in o ? s(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, t = (o, e) => {
  for (var r in e || (e = {}))
    f.call(e, r) && i(o, r, e[r]);
  if (a)
    for (var r of a(e))
      p.call(e, r) && i(o, r, e[r]);
  return o;
}, m = (o, e) => l(o, c(e));
import S, { forwardRef as h } from "react";
import R from "../lib/SSRBase.mjs";
import b from "../defs/DeviceMobileSlash.mjs";
const d = h((o, e) => /* @__PURE__ */ S.createElement(R, m(t({ ref: e }, o), { weights: b })));
d.displayName = "DeviceMobileSlash";
export {
  d as DeviceMobileSlash
};
