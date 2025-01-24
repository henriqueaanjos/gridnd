var i = Object.defineProperty, l = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var m = Object.getOwnPropertySymbols;
var n = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var r = (t, o, e) => o in t ? i(t, o, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[o] = e, s = (t, o) => {
  for (var e in o || (o = {}))
    n.call(o, e) && r(t, e, o[e]);
  if (m)
    for (var e of m(o))
      p.call(o, e) && r(t, e, o[e]);
  return t;
}, a = (t, o) => l(t, f(o));
import c, { forwardRef as u } from "react";
import R from "../lib/IconBase.mjs";
import g from "../defs/ColumnsPlusRight.mjs";
const h = u((t, o) => /* @__PURE__ */ c.createElement(R, a(s({ ref: o }, t), { weights: g })));
h.displayName = "ColumnsPlusRight";
export {
  h as ColumnsPlusRight
};
