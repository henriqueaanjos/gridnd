var f = Object.defineProperty, g = Object.defineProperties;
var i = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var t = (e, o, r) => o in e ? f(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, m = (e, o) => {
  for (var r in o || (o = {}))
    p.call(o, r) && t(e, r, o[r]);
  if (a)
    for (var r of a(o))
      s.call(o, r) && t(e, r, o[r]);
  return e;
}, l = (e, o) => g(e, i(o));
import c, { forwardRef as n } from "react";
import y from "../lib/IconBase.mjs";
import d from "../defs/GooglePlayLogo.mjs";
const w = n((e, o) => /* @__PURE__ */ c.createElement(y, l(m({ ref: o }, e), { weights: d })));
w.displayName = "GooglePlayLogo";
export {
  w as GooglePlayLogo
};
