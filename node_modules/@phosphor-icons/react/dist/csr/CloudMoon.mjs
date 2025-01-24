var i = Object.defineProperty, n = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var m = (e, o, r) => o in e ? i(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, a = (e, o) => {
  for (var r in o || (o = {}))
    s.call(o, r) && m(e, r, o[r]);
  if (t)
    for (var r of t(o))
      c.call(o, r) && m(e, r, o[r]);
  return e;
}, f = (e, o) => n(e, p(o));
import d, { forwardRef as l } from "react";
import u from "../lib/IconBase.mjs";
import w from "../defs/CloudMoon.mjs";
const C = l((e, o) => /* @__PURE__ */ d.createElement(u, f(a({ ref: o }, e), { weights: w })));
C.displayName = "CloudMoon";
export {
  C as CloudMoon
};
