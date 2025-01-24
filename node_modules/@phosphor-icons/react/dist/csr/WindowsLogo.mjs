var s = Object.defineProperty, f = Object.defineProperties;
var n = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var m = (e, o, r) => o in e ? s(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, a = (e, o) => {
  for (var r in o || (o = {}))
    p.call(o, r) && m(e, r, o[r]);
  if (t)
    for (var r of t(o))
      c.call(o, r) && m(e, r, o[r]);
  return e;
}, i = (e, o) => f(e, n(o));
import d, { forwardRef as w } from "react";
import g from "../lib/IconBase.mjs";
import l from "../defs/WindowsLogo.mjs";
const I = w((e, o) => /* @__PURE__ */ d.createElement(g, i(a({ ref: o }, e), { weights: l })));
I.displayName = "WindowsLogo";
export {
  I as WindowsLogo
};
