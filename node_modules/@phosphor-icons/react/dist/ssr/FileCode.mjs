var f = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var d = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var m = (o, e, r) => e in o ? f(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, a = (o, e) => {
  for (var r in e || (e = {}))
    d.call(e, r) && m(o, r, e[r]);
  if (t)
    for (var r of t(e))
      l.call(e, r) && m(o, r, e[r]);
  return o;
}, i = (o, e) => p(o, s(e));
import c, { forwardRef as R } from "react";
import n from "../lib/SSRBase.mjs";
import w from "../defs/FileCode.mjs";
const C = R((o, e) => /* @__PURE__ */ c.createElement(n, i(a({ ref: e }, o), { weights: w })));
C.displayName = "FileCode";
export {
  C as FileCode
};
