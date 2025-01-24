var f = Object.defineProperty, i = Object.defineProperties;
var n = Object.getOwnPropertyDescriptors;
var e = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var a = (r, o, t) => o in r ? f(r, o, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[o] = t, m = (r, o) => {
  for (var t in o || (o = {}))
    p.call(o, t) && a(r, t, o[t]);
  if (e)
    for (var t of e(o))
      s.call(o, t) && a(r, t, o[t]);
  return r;
}, w = (r, o) => i(r, n(o));
import c, { forwardRef as d } from "react";
import l from "../lib/IconBase.mjs";
import A from "../defs/ArrowFatDown.mjs";
const D = d((r, o) => /* @__PURE__ */ c.createElement(l, w(m({ ref: o }, r), { weights: A })));
D.displayName = "ArrowFatDown";
export {
  D as ArrowFatDown
};
