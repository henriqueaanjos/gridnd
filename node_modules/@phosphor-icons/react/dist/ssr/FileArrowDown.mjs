var w = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var m = (o, r, e) => r in o ? w(o, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : o[r] = e, a = (o, r) => {
  for (var e in r || (r = {}))
    s.call(r, e) && m(o, e, r[e]);
  if (t)
    for (var e of t(r))
      l.call(r, e) && m(o, e, r[e]);
  return o;
}, i = (o, r) => f(o, p(r));
import n, { forwardRef as c } from "react";
import R from "../lib/SSRBase.mjs";
import d from "../defs/FileArrowDown.mjs";
const A = c((o, r) => /* @__PURE__ */ n.createElement(R, i(a({ ref: r }, o), { weights: d })));
A.displayName = "FileArrowDown";
export {
  A as FileArrowDown
};
