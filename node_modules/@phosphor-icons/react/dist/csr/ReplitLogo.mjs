var p = Object.defineProperty, f = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var m = (e, o, t) => o in e ? p(e, o, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[o] = t, a = (e, o) => {
  for (var t in o || (o = {}))
    c.call(o, t) && m(e, t, o[t]);
  if (r)
    for (var t of r(o))
      l.call(o, t) && m(e, t, o[t]);
  return e;
}, i = (e, o) => f(e, s(o));
import R, { forwardRef as g } from "react";
import n from "../lib/IconBase.mjs";
import d from "../defs/ReplitLogo.mjs";
const w = g((e, o) => /* @__PURE__ */ R.createElement(n, i(a({ ref: o }, e), { weights: d })));
w.displayName = "ReplitLogo";
export {
  w as ReplitLogo
};
