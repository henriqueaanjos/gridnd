var i = Object.defineProperty, l = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, R = Object.prototype.propertyIsEnumerable;
var r = (t, o, e) => o in t ? i(t, o, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[o] = e, s = (t, o) => {
  for (var e in o || (o = {}))
    p.call(o, e) && r(t, e, o[e]);
  if (m)
    for (var e of m(o))
      R.call(o, e) && r(t, e, o[e]);
  return t;
}, a = (t, o) => l(t, f(o));
import n, { forwardRef as u } from "react";
import c from "../lib/SSRBase.mjs";
import g from "../defs/ColumnsPlusRight.mjs";
const h = u((t, o) => /* @__PURE__ */ n.createElement(c, a(s({ ref: o }, t), { weights: g })));
h.displayName = "ColumnsPlusRight";
export {
  h as ColumnsPlusRight
};
