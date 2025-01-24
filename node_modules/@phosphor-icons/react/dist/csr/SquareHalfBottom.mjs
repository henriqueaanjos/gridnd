var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var a = (t, o, e) => o in t ? i(t, o, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[o] = e, m = (t, o) => {
  for (var e in o || (o = {}))
    c.call(o, e) && a(t, e, o[e]);
  if (r)
    for (var e of r(o))
      l.call(o, e) && a(t, e, o[e]);
  return t;
}, f = (t, o) => p(t, s(o));
import n, { forwardRef as B } from "react";
import d from "../lib/IconBase.mjs";
import q from "../defs/SquareHalfBottom.mjs";
const u = B((t, o) => /* @__PURE__ */ n.createElement(d, f(m({ ref: o }, t), { weights: q })));
u.displayName = "SquareHalfBottom";
export {
  u as SquareHalfBottom
};
