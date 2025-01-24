var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var t = (o, e, r) => e in o ? f(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, m = (o, e) => {
  for (var r in e || (e = {}))
    s.call(e, r) && t(o, r, e[r]);
  if (a)
    for (var r of a(e))
      d.call(e, r) && t(o, r, e[r]);
  return o;
}, c = (o, e) => i(o, p(e));
import n, { forwardRef as B } from "react";
import l from "../lib/IconBase.mjs";
import w from "../defs/Barcode.mjs";
const I = B((o, e) => /* @__PURE__ */ n.createElement(l, c(m({ ref: e }, o), { weights: w })));
I.displayName = "Barcode";
export {
  I as Barcode
};
