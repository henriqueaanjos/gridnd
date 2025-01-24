var s = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var d = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var m = (e, o, r) => o in e ? s(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, a = (e, o) => {
  for (var r in o || (o = {}))
    d.call(o, r) && m(e, r, o[r]);
  if (t)
    for (var r of t(o))
      n.call(o, r) && m(e, r, o[r]);
  return e;
}, i = (e, o) => f(e, p(o));
import w, { forwardRef as c } from "react";
import g from "../lib/SSRBase.mjs";
import R from "../defs/WindowsLogo.mjs";
const l = c((e, o) => /* @__PURE__ */ w.createElement(g, i(a({ ref: o }, e), { weights: R })));
l.displayName = "WindowsLogo";
export {
  l as WindowsLogo
};
