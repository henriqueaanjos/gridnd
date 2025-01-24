var i = Object.defineProperty, f = Object.defineProperties;
var h = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var n = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var a = (e, o, r) => o in e ? i(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, s = (e, o) => {
  for (var r in o || (o = {}))
    n.call(o, r) && a(e, r, o[r]);
  if (t)
    for (var r of t(o))
      p.call(o, r) && a(e, r, o[r]);
  return e;
}, m = (e, o) => f(e, h(o));
import c, { forwardRef as d } from "react";
import l from "../lib/IconBase.mjs";
import u from "../defs/PaintBrushHousehold.mjs";
const B = d((e, o) => /* @__PURE__ */ c.createElement(l, m(s({ ref: o }, e), { weights: u })));
B.displayName = "PaintBrushHousehold";
export {
  B as PaintBrushHousehold
};
