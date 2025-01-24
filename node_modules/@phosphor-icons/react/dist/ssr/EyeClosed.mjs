var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var d = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var m = (o, e, r) => e in o ? f(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, a = (o, e) => {
  for (var r in e || (e = {}))
    d.call(e, r) && m(o, r, e[r]);
  if (t)
    for (var r of t(e))
      l.call(e, r) && m(o, r, e[r]);
  return o;
}, s = (o, e) => i(o, p(e));
import c, { forwardRef as y } from "react";
import E from "../lib/SSRBase.mjs";
import R from "../defs/EyeClosed.mjs";
const n = y((o, e) => /* @__PURE__ */ c.createElement(E, s(a({ ref: e }, o), { weights: R })));
n.displayName = "EyeClosed";
export {
  n as EyeClosed
};
