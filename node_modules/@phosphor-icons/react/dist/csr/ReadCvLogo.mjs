var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var t = (e, o, r) => o in e ? i(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, m = (e, o) => {
  for (var r in o || (o = {}))
    c.call(o, r) && t(e, r, o[r]);
  if (a)
    for (var r of a(o))
      d.call(o, r) && t(e, r, o[r]);
  return e;
}, f = (e, o) => p(e, s(o));
import R, { forwardRef as g } from "react";
import n from "../lib/IconBase.mjs";
import l from "../defs/ReadCvLogo.mjs";
const v = g((e, o) => /* @__PURE__ */ R.createElement(n, f(m({ ref: o }, e), { weights: l })));
v.displayName = "ReadCvLogo";
export {
  v as ReadCvLogo
};
