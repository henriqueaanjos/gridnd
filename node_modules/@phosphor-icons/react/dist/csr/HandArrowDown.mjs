var w = Object.defineProperty, f = Object.defineProperties;
var i = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var t = (r, o, e) => o in r ? w(r, o, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[o] = e, m = (r, o) => {
  for (var e in o || (o = {}))
    p.call(o, e) && t(r, e, o[e]);
  if (a)
    for (var e of a(o))
      s.call(o, e) && t(r, e, o[e]);
  return r;
}, n = (r, o) => f(r, i(o));
import c, { forwardRef as d } from "react";
import l from "../lib/IconBase.mjs";
import A from "../defs/HandArrowDown.mjs";
const D = d((r, o) => /* @__PURE__ */ c.createElement(l, n(m({ ref: o }, r), { weights: A })));
D.displayName = "HandArrowDown";
export {
  D as HandArrowDown
};
