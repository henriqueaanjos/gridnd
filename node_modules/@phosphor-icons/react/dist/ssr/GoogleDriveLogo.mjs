var f = Object.defineProperty, g = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var m = (e, o, r) => o in e ? f(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, a = (e, o) => {
  for (var r in o || (o = {}))
    s.call(o, r) && m(e, r, o[r]);
  if (t)
    for (var r of t(o))
      l.call(o, r) && m(e, r, o[r]);
  return e;
}, i = (e, o) => g(e, p(o));
import c, { forwardRef as R } from "react";
import d from "../lib/SSRBase.mjs";
import n from "../defs/GoogleDriveLogo.mjs";
const v = R((e, o) => /* @__PURE__ */ c.createElement(d, i(a({ ref: o }, e), { weights: n })));
v.displayName = "GoogleDriveLogo";
export {
  v as GoogleDriveLogo
};
