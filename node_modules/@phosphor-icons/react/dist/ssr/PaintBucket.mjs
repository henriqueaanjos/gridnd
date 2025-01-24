var c = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var o = (e, t, r) => t in e ? c(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, m = (e, t) => {
  for (var r in t || (t = {}))
    s.call(t, r) && o(e, r, t[r]);
  if (a)
    for (var r of a(t))
      n.call(t, r) && o(e, r, t[r]);
  return e;
}, i = (e, t) => f(e, p(t));
import B, { forwardRef as R } from "react";
import d from "../lib/SSRBase.mjs";
import k from "../defs/PaintBucket.mjs";
const l = R((e, t) => /* @__PURE__ */ B.createElement(d, i(m({ ref: t }, e), { weights: k })));
l.displayName = "PaintBucket";
export {
  l as PaintBucket
};
