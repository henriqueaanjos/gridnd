var f = Object.defineProperty, n = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var m = (e, o, r) => o in e ? f(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, a = (e, o) => {
  for (var r in o || (o = {}))
    s.call(o, r) && m(e, r, o[r]);
  if (t)
    for (var r of t(o))
      c.call(o, r) && m(e, r, o[r]);
  return e;
}, i = (e, o) => n(e, p(o));
import L, { forwardRef as g } from "react";
import x from "../lib/IconBase.mjs";
import d from "../defs/LinuxLogo.mjs";
const l = g((e, o) => /* @__PURE__ */ L.createElement(x, i(a({ ref: o }, e), { weights: d })));
l.displayName = "LinuxLogo";
export {
  l as LinuxLogo
};
