var n = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, B = Object.prototype.propertyIsEnumerable;
var m = (e, o, r) => o in e ? n(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, a = (e, o) => {
  for (var r in o || (o = {}))
    s.call(o, r) && m(e, r, o[r]);
  if (t)
    for (var r of t(o))
      B.call(o, r) && m(e, r, o[r]);
  return e;
}, i = (e, o) => f(e, p(o));
import d, { forwardRef as c } from "react";
import g from "../lib/SSRBase.mjs";
import x from "../defs/BoundingBox.mjs";
const R = c((e, o) => /* @__PURE__ */ d.createElement(g, i(a({ ref: o }, e), { weights: x })));
R.displayName = "BoundingBox";
export {
  R as BoundingBox
};
