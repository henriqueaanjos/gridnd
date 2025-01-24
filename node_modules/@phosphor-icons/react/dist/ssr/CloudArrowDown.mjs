var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var m = (r, o, e) => o in r ? f(r, o, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[o] = e, a = (r, o) => {
  for (var e in o || (o = {}))
    s.call(o, e) && m(r, e, o[e]);
  if (t)
    for (var e of t(o))
      d.call(o, e) && m(r, e, o[e]);
  return r;
}, w = (r, o) => i(r, p(o));
import l, { forwardRef as n } from "react";
import c from "../lib/SSRBase.mjs";
import R from "../defs/CloudArrowDown.mjs";
const u = n((r, o) => /* @__PURE__ */ l.createElement(c, w(a({ ref: o }, r), { weights: R })));
u.displayName = "CloudArrowDown";
export {
  u as CloudArrowDown
};
