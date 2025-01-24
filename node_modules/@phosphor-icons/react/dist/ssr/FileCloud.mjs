var l = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var m = (o, e, r) => e in o ? l(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, a = (o, e) => {
  for (var r in e || (e = {}))
    s.call(e, r) && m(o, r, e[r]);
  if (t)
    for (var r of t(e))
      d.call(e, r) && m(o, r, e[r]);
  return o;
}, i = (o, e) => f(o, p(e));
import c, { forwardRef as R } from "react";
import n from "../lib/SSRBase.mjs";
import u from "../defs/FileCloud.mjs";
const w = R((o, e) => /* @__PURE__ */ c.createElement(n, i(a({ ref: e }, o), { weights: u })));
w.displayName = "FileCloud";
export {
  w as FileCloud
};
