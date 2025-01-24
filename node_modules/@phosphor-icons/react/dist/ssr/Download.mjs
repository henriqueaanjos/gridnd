var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var d = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var t = (e, o, r) => o in e ? i(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, m = (e, o) => {
  for (var r in o || (o = {}))
    d.call(o, r) && t(e, r, o[r]);
  if (a)
    for (var r of a(o))
      l.call(o, r) && t(e, r, o[r]);
  return e;
}, f = (e, o) => p(e, s(o));
import n, { forwardRef as w } from "react";
import c from "../lib/SSRBase.mjs";
import R from "../defs/Download.mjs";
const D = w((e, o) => /* @__PURE__ */ n.createElement(c, f(m({ ref: o }, e), { weights: R })));
D.displayName = "Download";
export {
  D as Download
};
