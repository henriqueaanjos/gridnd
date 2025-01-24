var n = Object.defineProperty, s = Object.defineProperties;
var l = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var f = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var t = (o, e, r) => e in o ? n(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, m = (o, e) => {
  for (var r in e || (e = {}))
    f.call(e, r) && t(o, r, e[r]);
  if (a)
    for (var r of a(e))
      p.call(e, r) && t(o, r, e[r]);
  return o;
}, i = (o, e) => s(o, l(e));
import c, { forwardRef as B } from "react";
import d from "../lib/IconBase.mjs";
import w from "../defs/TennisBall.mjs";
const I = B((o, e) => /* @__PURE__ */ c.createElement(d, i(m({ ref: e }, o), { weights: w })));
I.displayName = "TennisBall";
export {
  I as TennisBall
};
