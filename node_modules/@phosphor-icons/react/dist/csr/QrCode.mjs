var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var m = (o, e, r) => e in o ? i(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, a = (o, e) => {
  for (var r in e || (e = {}))
    c.call(e, r) && m(o, r, e[r]);
  if (t)
    for (var r of t(e))
      d.call(e, r) && m(o, r, e[r]);
  return o;
}, f = (o, e) => p(o, s(e));
import n, { forwardRef as l } from "react";
import w from "../lib/IconBase.mjs";
import C from "../defs/QrCode.mjs";
const I = l((o, e) => /* @__PURE__ */ n.createElement(w, f(a({ ref: e }, o), { weights: C })));
I.displayName = "QrCode";
export {
  I as QrCode
};
