var s = Object.defineProperty, f = Object.defineProperties;
var n = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var t = (r, e, a) => e in r ? s(r, e, { enumerable: !0, configurable: !0, writable: !0, value: a }) : r[e] = a, m = (r, e) => {
  for (var a in e || (e = {}))
    p.call(e, a) && t(r, a, e[a]);
  if (o)
    for (var a of o(e))
      c.call(e, a) && t(r, a, e[a]);
  return r;
}, i = (r, e) => f(r, n(e));
import d, { forwardRef as l } from "react";
import g from "../lib/IconBase.mjs";
import h from "../defs/TriangleDashed.mjs";
const w = l((r, e) => /* @__PURE__ */ d.createElement(g, i(m({ ref: e }, r), { weights: h })));
w.displayName = "TriangleDashed";
export {
  w as TriangleDashed
};
