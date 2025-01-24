var i = Object.defineProperty, f = Object.defineProperties;
var h = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var a = (e, o, r) => o in e ? i(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, s = (e, o) => {
  for (var r in o || (o = {}))
    p.call(o, r) && a(e, r, o[r]);
  if (t)
    for (var r of t(o))
      d.call(o, r) && a(e, r, o[r]);
  return e;
}, m = (e, o) => f(e, h(o));
import l, { forwardRef as n } from "react";
import u from "../lib/SSRBase.mjs";
import c from "../defs/PaintBrushHousehold.mjs";
const B = n((e, o) => /* @__PURE__ */ l.createElement(u, m(s({ ref: o }, e), { weights: c })));
B.displayName = "PaintBrushHousehold";
export {
  B as PaintBrushHousehold
};
