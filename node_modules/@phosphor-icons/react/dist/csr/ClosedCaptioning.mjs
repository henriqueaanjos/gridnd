var n = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var f = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var a = (e, o, t) => o in e ? n(e, o, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[o] = t, i = (e, o) => {
  for (var t in o || (o = {}))
    f.call(o, t) && a(e, t, o[t]);
  if (r)
    for (var t of r(o))
      c.call(o, t) && a(e, t, o[t]);
  return e;
}, m = (e, o) => p(e, s(o));
import d, { forwardRef as l } from "react";
import C from "../lib/IconBase.mjs";
import g from "../defs/ClosedCaptioning.mjs";
const w = l((e, o) => /* @__PURE__ */ d.createElement(C, m(i({ ref: o }, e), { weights: g })));
w.displayName = "ClosedCaptioning";
export {
  w as ClosedCaptioning
};
