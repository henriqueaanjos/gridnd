var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var m = (e, o, r) => o in e ? i(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, a = (e, o) => {
  for (var r in o || (o = {}))
    l.call(o, r) && m(e, r, o[r]);
  if (t)
    for (var r of t(o))
      n.call(o, r) && m(e, r, o[r]);
  return e;
}, f = (e, o) => p(e, s(o));
import c, { forwardRef as g } from "react";
import y from "../lib/SSRBase.mjs";
import R from "../defs/Polygon.mjs";
const d = g((e, o) => /* @__PURE__ */ c.createElement(y, f(a({ ref: o }, e), { weights: R })));
d.displayName = "Polygon";
export {
  d as Polygon
};
