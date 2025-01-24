var l = Object.defineProperty, f = Object.defineProperties;
var n = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var a = (o, e, r) => e in o ? l(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, m = (o, e) => {
  for (var r in e || (e = {}))
    p.call(e, r) && a(o, r, e[r]);
  if (t)
    for (var r of t(e))
      s.call(e, r) && a(o, r, e[r]);
  return o;
}, i = (o, e) => f(o, n(e));
import c, { forwardRef as R } from "react";
import d from "../lib/IconBase.mjs";
import w from "../defs/PaintRoller.mjs";
const I = R((o, e) => /* @__PURE__ */ c.createElement(d, i(m({ ref: e }, o), { weights: w })));
I.displayName = "PaintRoller";
export {
  I as PaintRoller
};
