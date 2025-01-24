var w = Object.defineProperty, f = Object.defineProperties;
var n = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var a = (o, r, e) => r in o ? w(o, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : o[r] = e, m = (o, r) => {
  for (var e in r || (r = {}))
    p.call(r, e) && a(o, e, r[e]);
  if (t)
    for (var e of t(r))
      s.call(r, e) && a(o, e, r[e]);
  return o;
}, i = (o, r) => f(o, n(r));
import c, { forwardRef as R } from "react";
import g from "../lib/IconBase.mjs";
import h from "../defs/ArrowSquareDownRight.mjs";
const d = R((o, r) => /* @__PURE__ */ c.createElement(g, i(m({ ref: r }, o), { weights: h })));
d.displayName = "ArrowSquareDownRight";
export {
  d as ArrowSquareDownRight
};
