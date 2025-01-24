var f = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var t = (e, o, r) => o in e ? f(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, m = (e, o) => {
  for (var r in o || (o = {}))
    c.call(o, r) && t(e, r, o[r]);
  if (a)
    for (var r of a(o))
      d.call(o, r) && t(e, r, o[r]);
  return e;
}, i = (e, o) => p(e, s(o));
import R, { forwardRef as n } from "react";
import l from "../lib/IconBase.mjs";
import w from "../defs/Radio.mjs";
const I = n((e, o) => /* @__PURE__ */ R.createElement(l, i(m({ ref: o }, e), { weights: w })));
I.displayName = "Radio";
export {
  I as Radio
};
