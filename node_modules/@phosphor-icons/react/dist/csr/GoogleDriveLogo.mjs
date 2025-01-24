var f = Object.defineProperty, g = Object.defineProperties;
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
}, i = (e, o) => g(e, p(o));
import l, { forwardRef as n } from "react";
import d from "../lib/IconBase.mjs";
import v from "../defs/GoogleDriveLogo.mjs";
const w = n((e, o) => /* @__PURE__ */ l.createElement(d, i(a({ ref: o }, e), { weights: v })));
w.displayName = "GoogleDriveLogo";
export {
  w as GoogleDriveLogo
};
