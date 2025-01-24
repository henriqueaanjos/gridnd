var i = Object.defineProperty, f = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var p = Object.getOwnPropertySymbols;
var d = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var t = (e, o, r) => o in e ? i(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, m = (e, o) => {
  for (var r in o || (o = {}))
    d.call(o, r) && t(e, r, o[r]);
  if (p)
    for (var r of p(o))
      n.call(o, r) && t(e, r, o[r]);
  return e;
}, a = (e, o) => f(e, s(o));
import w, { forwardRef as c } from "react";
import R from "../lib/SSRBase.mjs";
import l from "../defs/AppWindow.mjs";
const A = c((e, o) => /* @__PURE__ */ w.createElement(R, a(m({ ref: o }, e), { weights: l })));
A.displayName = "AppWindow";
export {
  A as AppWindow
};
