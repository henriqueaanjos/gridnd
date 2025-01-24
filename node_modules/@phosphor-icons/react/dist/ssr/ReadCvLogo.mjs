var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var R = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var t = (e, o, r) => o in e ? i(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, m = (e, o) => {
  for (var r in o || (o = {}))
    R.call(o, r) && t(e, r, o[r]);
  if (a)
    for (var r of a(o))
      d.call(o, r) && t(e, r, o[r]);
  return e;
}, f = (e, o) => p(e, s(o));
import c, { forwardRef as g } from "react";
import l from "../lib/SSRBase.mjs";
import n from "../defs/ReadCvLogo.mjs";
const v = g((e, o) => /* @__PURE__ */ c.createElement(l, f(m({ ref: o }, e), { weights: n })));
v.displayName = "ReadCvLogo";
export {
  v as ReadCvLogo
};
