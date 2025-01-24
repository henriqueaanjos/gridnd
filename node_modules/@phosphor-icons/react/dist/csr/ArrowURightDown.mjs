var w = Object.defineProperty, f = Object.defineProperties;
var n = Object.getOwnPropertyDescriptors;
var e = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var m = (r, o, t) => o in r ? w(r, o, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[o] = t, a = (r, o) => {
  for (var t in o || (o = {}))
    p.call(o, t) && m(r, t, o[t]);
  if (e)
    for (var t of e(o))
      s.call(o, t) && m(r, t, o[t]);
  return r;
}, i = (r, o) => f(r, n(o));
import c, { forwardRef as R } from "react";
import g from "../lib/IconBase.mjs";
import h from "../defs/ArrowURightDown.mjs";
const d = R((r, o) => /* @__PURE__ */ c.createElement(g, i(a({ ref: o }, r), { weights: h })));
d.displayName = "ArrowURightDown";
export {
  d as ArrowURightDown
};
