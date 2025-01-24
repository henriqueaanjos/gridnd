var f = Object.defineProperty, n = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var t = (e, o, r) => o in e ? f(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, m = (e, o) => {
  for (var r in o || (o = {}))
    s.call(o, r) && t(e, r, o[r]);
  if (a)
    for (var r of a(o))
      c.call(o, r) && t(e, r, o[r]);
  return e;
}, i = (e, o) => n(e, p(o));
import d, { forwardRef as l } from "react";
import R from "../lib/IconBase.mjs";
import u from "../defs/CloudRain.mjs";
const w = l((e, o) => /* @__PURE__ */ d.createElement(R, i(m({ ref: o }, e), { weights: u })));
w.displayName = "CloudRain";
export {
  w as CloudRain
};
