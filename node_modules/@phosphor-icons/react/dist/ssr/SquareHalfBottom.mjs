var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, S = Object.prototype.propertyIsEnumerable;
var a = (t, o, e) => o in t ? i(t, o, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[o] = e, m = (t, o) => {
  for (var e in o || (o = {}))
    l.call(o, e) && a(t, e, o[e]);
  if (r)
    for (var e of r(o))
      S.call(o, e) && a(t, e, o[e]);
  return t;
}, f = (t, o) => p(t, s(o));
import c, { forwardRef as B } from "react";
import R from "../lib/SSRBase.mjs";
import d from "../defs/SquareHalfBottom.mjs";
const n = B((t, o) => /* @__PURE__ */ c.createElement(R, f(m({ ref: o }, t), { weights: d })));
n.displayName = "SquareHalfBottom";
export {
  n as SquareHalfBottom
};
