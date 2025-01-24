var l = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var m = (o, e, r) => e in o ? l(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, a = (o, e) => {
  for (var r in e || (e = {}))
    s.call(e, r) && m(o, r, e[r]);
  if (t)
    for (var r of t(e))
      c.call(e, r) && m(o, r, e[r]);
  return o;
}, i = (o, e) => f(o, p(e));
import d, { forwardRef as n } from "react";
import u from "../lib/IconBase.mjs";
import w from "../defs/FileCloud.mjs";
const C = n((o, e) => /* @__PURE__ */ d.createElement(u, i(a({ ref: e }, o), { weights: w })));
C.displayName = "FileCloud";
export {
  C as FileCloud
};
