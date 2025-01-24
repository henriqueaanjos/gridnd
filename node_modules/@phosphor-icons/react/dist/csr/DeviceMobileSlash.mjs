var s = Object.defineProperty, c = Object.defineProperties;
var l = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var f = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var i = (o, e, r) => e in o ? s(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, t = (o, e) => {
  for (var r in e || (e = {}))
    f.call(e, r) && i(o, r, e[r]);
  if (a)
    for (var r of a(e))
      p.call(e, r) && i(o, r, e[r]);
  return o;
}, m = (o, e) => c(o, l(e));
import h, { forwardRef as n } from "react";
import b from "../lib/IconBase.mjs";
import d from "../defs/DeviceMobileSlash.mjs";
const v = n((o, e) => /* @__PURE__ */ h.createElement(b, m(t({ ref: e }, o), { weights: d })));
v.displayName = "DeviceMobileSlash";
export {
  v as DeviceMobileSlash
};
