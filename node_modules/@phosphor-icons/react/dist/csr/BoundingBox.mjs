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
import c, { forwardRef as d } from "react";
import g from "../lib/IconBase.mjs";
import x from "../defs/BoundingBox.mjs";
const l = d((e, o) => /* @__PURE__ */ c.createElement(g, i(a({ ref: o }, e), { weights: x })));
l.displayName = "BoundingBox";
export {
  l as BoundingBox
};
